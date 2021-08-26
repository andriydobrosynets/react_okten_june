import './App.css';
import {useReducer} from "react";
// import reducer from "./reducer/reducer";
function reducer(state, action) {
  if (action.obj ==='1' && action.diya === '+'){
    return{...state,a:state.a+10}
  }else if (action.obj === '1' && action.diya === '-') {
    return {...state, a: state.a-2}
  }else if (action.obj === '1' && action.diya === '0') {
      return {...state, a: state.a=0}}
  return {...state}
}

function App() {
  let [{a},dispatch] = useReducer(reducer,{a:0})
  return (
    <div className={"full"}>
      <h1 className={'lichilnik'}>{a}</h1>
      <div className={'button'}>
          <button className={'plus'} onClick={() => dispatch({obj: '1', diya: '+'})}>Додати 10</button>
          <button className={'minus'} onClick={() => dispatch({obj: '1', diya: '-'})}>Відняти 2</button>
      </div>
        <div className={'footer'}>
            <button className={'null'} onClick={() => dispatch({obj: '1', diya: '0'})}>Очистити</button>
        </div>

    </div>
  );
}

export default App;
