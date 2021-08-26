// import './App.css';
import {useState} from "react";
import {useRef} from "react";
import {useEffect} from "react";
// function App() {
//   const [seconds, setSeconds] = useState(10);
//   const [done, setDone] = useState(false);
//   const foo = useRef();
//   const [timer, setTimer] = useState(2)
//   const [isRunning, setIsRunning] = useState(false)
//   const [resetTime, setResetTime] = useState(900)
//
//   function resetTimer() {
//     setIsRunning(false)
//     setTimer(resetTime)
//   }
//
//   useEffect(() => {
//     function tick() {
//       setSeconds(prevSeconds => prevSeconds - 1)
//     }
//     foo.current = setInterval(() => tick(), 1000)
//   }, []);
//
//   useEffect(() => {
//     if (seconds  === 0) {
//       clearInterval(foo.current);
//       setDone(true);
//     }
//   }, [seconds])
//   useEffect(() => {
//     setResetTime(timer)
//   }, [])
//   return (
//
//       <div>
//         <h1>{seconds}</h1>
//         <h1>{done && <p>STOP</p>}</h1>
//         <button onClick={() => resetTimer()}>Reset</button>
//       </div>
//   );
// }
//
// export default App;
import './App.css';

function App() {
  const [session, setSession] = useState(5)
  const [timer, setTimer] = useState(10)
  const [isRunning, setIsRunning] = useState(false)
  const [resetTime, setResetTime] = useState(900)

  let time = new Date(timer * 1000).toISOString().substr(11, 8);

  function sessionIncrement() {
    setSession(prevSession => session + 1)
  }
  function sessionDecrement() {
    if (session > 0) {
      setIsRunning(false)
      setSession(prevSession => prevSession > 0 && prevSession - 1)
    }
  }

  function resetTimer() {
    setIsRunning(false)
    setTimer(resetTime)
  }

  function increment() {
    setIsRunning(false);
    setTimer(prevTimer => prevTimer + 300);
  }

  function decrement() {
    setIsRunning(false);
    setTimer(prevTimer => prevTimer - 300);
  }


  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer > 0 && prevTimer - 1)
      }, 1000);
      if (timer === 0) {
        sessionDecrement()
        setIsRunning(false)
      }
      return () => clearInterval(interval)
    }
  }, [isRunning, session, timer])

  useEffect(() => {
    setResetTime(timer)
  }, [])


  return (
      <div className="App">
        <h1>Session #{session}</h1>
        <button onClick={() => sessionDecrement()}>-</button>
        <button onClick={() => sessionIncrement()}>+</button>
        <h1>{time}</h1>
        <button onClick={() => setIsRunning(false)} >Pause</button>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => resetTimer()}>Reset</button>
        <button onClick={() => decrement()}>-</button>
        <button onClick={() => increment()}>+</button>
      </div>
  );
}

export default App;