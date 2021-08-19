let url =  'https://jsonplaceholder.typicode.com/comments'
const getComments = ()=>{
    return fetch(url)
        .then(value => value.json())

}
export {getComments};