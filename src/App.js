import './App.css';
import {useReducer} from "react";
// function reducer(state=0, action) {
//   if (action.obj ==='1' && action.diya === '+'){
//     return{...state,a:state.a+10}
//   }else if (action.obj === '1' && action.diya === '-') {
//     return {...state, a: state.a-2}
//   }else if (action.obj === '1' && action.diya === '0') {
//       return {...state, a: state.a=0}}
//   return {...state}
// }
//
// export default function App() {
//   let [{a},dispatch] = useReducer(reducer,{a:0})
//   return (
//     <div className={"full"}>
//       <h1 className={'lichilnik'}>{a}</h1>
//       <div className={'button'}>
//           <button className={'plus'} onClick={() => dispatch({obj: '1', diya: '+'})}>Додати 10</button>
//           <button className={'minus'} onClick={() => dispatch({obj: '1', diya: '-'})}>Відняти 2</button>
//       </div>
//         <div className={'footer'}>
//             <button className={'null'} onClick={() => dispatch({obj: '1', diya: '0'})}>Очистити</button>
//         </div>
//
//     </div>
//   );
// }

//-------------------------------------------------------------------------------------------------

function reducer(state, action) {
    switch (action.type){
        case'INC':
            return{...state,[action.key]: state[action.key]+action.payload}
        case 'DEC':
            return {...state, [action.key]: state[action.key] - action.payload};
        case 'NULL':
            return {...state, a: state.a=0};
        default:
            return state
    }
}

export default function App() {
    let [{a},dispatch] = useReducer(reducer,{a:0})
    return (
        <div className={"full"}>
            <h1 className={'lichilnik'}>{a}</h1>
            <div className={'button'}>
                <button className={'plus'} onClick={() => dispatch({type: 'INC', key: 'a', payload: 10})}>Додати 10</button>
                <button className={'minus'} onClick={() => dispatch({type: 'DEC', key: 'a', payload: 2})}>Відняти 2</button>
            </div>
            <div className={'footer'}>
                <button className={'null'} onClick={() => dispatch({type: 'NULL', key: 'a'})}>Очистити</button>
            </div>

        </div>
    );
}