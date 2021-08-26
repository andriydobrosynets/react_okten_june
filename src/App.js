import './App.css';
import {useReducer} from "react";
// import reducer from "./reducer/reducer";
function reducer(state, action) {
  if (action.obj ==='1' && action.diya === '+'){
    return{...state,a:state.a+10}
  }else if (action.obj === '1' && action.diya === '-') {
    return {...state, a: state.a-2}
  }
  return {...state}
}

function App() {
  let [{a},dispatch] = useReducer(reducer,{a:0})
  return (
    <div>
      <h1>{a}</h1>
      <div>
          <button onClick={() => dispatch({obj: '1', diya: '+'})}>Додати 10</button>
          <button onClick={() => dispatch({obj: '1', diya: '-'})}>Відняти 2</button>
          <button onClick={() => {inerText}}>Відняти 2</button>
      </div>

    </div>
  );
}

export default App;
