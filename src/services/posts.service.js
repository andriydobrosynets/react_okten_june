let url =  'https://jsonplaceholder.typicode.com/posts'
const getPosts = ()=>{
    return fetch(url)
        .then(value => value.json())

}
export {getPosts};