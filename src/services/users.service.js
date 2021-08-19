let url =  'https://jsonplaceholder.typicode.com/users'
const getUsers = ()=>{
    return fetch(url)
        .then(value => value.json())

}
export {getUsers};