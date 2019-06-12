import React from 'react';

const Friend = props =>{
    return(
        <div>
            <h2>{props.friend.name}</h2>
            <h4>{props.friend.age}</h4>
            <h4>{props.friend.email}</h4>
            <button onClick={()=>props.deleteFriend(props.friend.id)}>Delete</button>
        </div>
    );
}

export default Friend;