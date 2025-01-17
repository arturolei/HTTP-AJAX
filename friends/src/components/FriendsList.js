import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
    return (
        <div className="friends-list">
            {props.friends.map(friend=>{
                return <Friend key={friend.key} friend={friend} deleteFriend={props.deleteFriend} setUpdateMode={props.setUpdateMode}/>;
            })}
        </div>
    );
}

export default FriendsList;