import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../services/user.service";
import Posts from "../posts/Posts";

export default function Users(){
    let [users,setUsers]=useState([])
    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    },[])
    return(
        <div>
            {
                users.map((userItem,index)=> <User key = {userItem.id} item={userItem}/>)
            }
        </div>
    )
}