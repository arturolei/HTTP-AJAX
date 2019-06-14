import React from 'react';
import './friends.css';

const Friend = props =>{
    return(
        <div className="friend-card">
            <h2>{props.friend.name}</h2>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button onClick={()=>props.deleteFriend(props.friend.id)}>Delete</button>
            <button onClick={()=>props.setUpdateMode(props.friend)}>Update Friendo</button>
        </div>
    );
}

export default Friend;