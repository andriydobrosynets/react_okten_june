import {useEffect, useState} from 'react';
import {getUser} from '../services/user.service';
import Posts from '../posts/Posts';
export default function User({item: userItem}) {

    return (
        <div>
            {<h2>{userItem.id} {userItem.name}</h2>}
        </div>
    );
}

