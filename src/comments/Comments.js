import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import {getComments} from "../services/comments.service";
export default function Comments() {
    let [comments,setComments]=useState([])
    useEffect(()=>{
        getComments().then(value => setComments([...value]))
    },[])
    return (
        <div>
            {
                comments.map(value =>(< Comment key={value.id} item = {value} />))
            }
        </div>
    );
}