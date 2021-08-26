import {useReducer} from "react";
// import reducer from "./reducer/reducer";

const reducer = (state, action) => {
  if (action.obj === '1' && action.diya === '+') {
    return {...state, a: state.a++}
  } else if (action.obj === '1' && action.diya === '-') {
    return {...state, a: state.a--}
  } else if (action.obj === '2' && action.diya === '+') {
    return {...state, b: state.b+4.3 }
  } else if (action.obj === '2' && action.diya === '-') {
    return {...state, b: state.b-2.4}
  } else if (action.obj === '3' && action.diya === '+') {
     return {...state, c: state.c+10}
  } else if (action.obj === '3' && action.diya === '-') {
     return {...state, c: state.c-5}
  }

  return {...state};
}

export default function App() {

  let [state, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});
  let {a, b, c}=state

  return (
      <div>
        <h1>state 1 - {a}</h1>
        <button onClick={() => dispatch({obj: '1', diya: '+'})}>Plus 1</button>
        <button onClick={() => dispatch({obj: '1', diya: '-'})}>Minus 1</button>
        <h1>state 2 - {b}</h1>
        <button onClick={() => dispatch({obj: '2', diya: '+'})}>Plus 4.3</button>
        <button onClick={() => dispatch({obj: '2', diya: '-'})}>Minus 2.4</button>
        <h1>state 3 - {c}</h1>
        <button onClick={() => dispatch({obj: '3', diya: '+'})}>Plus 10</button>
        <button onClick={() => dispatch({obj: '3', diya: '-'})}>Minus 5</button>

      </div>
  );
}