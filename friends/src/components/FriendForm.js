import React from 'react';

export default class FriendForm extends React.Component {
    constructor(){
        super();
        this.state= {
            friendData:{
                name:"",
                age:"",
                email:""
            }
        }; 
    }
    eventHandler = event =>{
        this.setState({
            friendData:{
                ...this.state.friendData,
                [event.target.name]: event.target.value
            }
        })
    }
    postFriend =  event => {
        event.preventDefault();
        this.props.postFriend(this.state.friendData);
    }
    render(){
        return (
            <form onSubmit={this.postFriend}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.eventHandler}
                    value = {this.state.friendData.name} 
                />
                <input 
                    type="text"
                    name="age"
                    placeholder="Age"
                    onChange={this.eventHandler}
                    value = {this.state.friendData.age} 
                />
                <input 
                    type="text"
                    name="email"
                    placeholder="Name"
                    onChange={this.eventHandler}
                    value = {this.state.friendData.email} 
                />
                <button>ADD FRIEND (POST)</button>
            </form>
        );
    }
}