import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../services/posts.service";

export default function Posts() {
    let [posts,setPosts]=useState([])
    useEffect(()=>{
        getPosts().then(value => setPosts([...value]))
    },[])

    return (
        <div>
            {
                posts.map(value =>(< Post item = {value} key={value.id}/>))
            }
        </div>
    );
}