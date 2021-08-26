import {useReducer} from "react";
// const reducer = (state, action) => {
//   if (action.obj === 'a' && action.diya === '+') {
//     return {...state, a: state.a++}
//   } else if (action.obj === 'a' && action.diya === '-') {
//     return {...state, a: state.a--}
//   } else if (action.obj === 'b' && action.diya === '+') {
//     return {...state, b: state.b+4.3 }
//   } else if (action.obj === 'b' && action.diya === '-') {
//     return {...state, b: state.b-2.4}
//   } else if (action.obj === 'c' && action.diya === '+') {
//      return {...state, c: state.c+10}
//   } else if (action.obj === 'c' && action.diya === '-') {
//      return {...state, c: state.c-5}
//   }
//   return {...state};
// }
// export default function App() {
//
//     let [state, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});
//     let {a, b, c}=state
//
//     return (
//         <div>
//             <h1>state 1 - {a}</h1>
//             <button onClick={() => dispatch({obj: 'a', diya: '+'})}>Plus 1</button>
//             <button onClick={() => dispatch({obj: 'a', diya: '-'})}>Minus 1</button>
//             <h1>state 2 - {b}</h1>
//             <button onClick={() => dispatch({obj: 'b', diya: '+'})}>Plus 4.3</button>
//             <button onClick={() => dispatch({obj: 'b', diya: '-'})}>Minus 2.4</button>
//             <h1>state 3 - {c}</h1>
//             <button onClick={() => dispatch({obj: 'c', diya: '+'})}>Plus 10</button>
//             <button onClick={() => dispatch({obj: 'c', diya: '-'})}>Minus 5</button>
//
//         </div>
//     );
// }


//-----------------------------------------------------------------------------------------------------



const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return {...state, [action.key]: state[action.key] + action.payload};

        case 'DEC':
            return {...state, [action.key]: state[action.key] - action.payload};
        default:
            return state
    }}
export default function App() {
    const initValue = {a: 0, b: 0, c: 0}
    let [{a, b, c}, dispatch] = useReducer(reducer, initValue);
    return (
        <div>
            <h1>state 1 - {a}</h1>
            <button onClick={() => dispatch({type: 'INC', key: 'a', payload: 1})}>Plus 1</button>
            <button onClick={() => dispatch({type: 'DEC', key: 'a', payload: 1})}>Minus 1</button>
            <h1>state 2 - {b}</h1>
            <button onClick={() => dispatch({type: 'INC', key: 'b', payload: 14})}>Plus 14</button>
            <button onClick={() => dispatch({type: 'DEC', key: 'b', payload: 7})}>Minus 7</button>
            <h1>state 3 - {c}</h1>
            <button onClick={() => dispatch({type: 'INC', key: 'c', payload: 100})}>Plus 100</button>
            <button onClick={() => dispatch({type: 'DEC', key: 'c', payload: 10})}>Minus 10</button>
        </div>
    );
}