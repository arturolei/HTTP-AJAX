import React from 'react';
import './friends.css';
import PropTypes from 'prop-types';

const Friend = props =>{
    return(
        <div className="friend-card">
            <h2>{props.friend.name}</h2>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button onClick={()=>props.deleteFriend(props.friend.id)}>Delete Friendo</button>
            <button onClick={()=>props.setUpdateMode(props.friend)}>Update Friendo</button>
        </div>
    );
}

Friend.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.number.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired
    })
}

export default Friend;