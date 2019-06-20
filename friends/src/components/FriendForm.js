import React from 'react';
import './friends.css'


export default class FriendForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friendData: this.props.activeFriend || {
                name:"",
                age:"",
                email:""
            }
        }; 
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.activeFriend && 
            prevProps.activeFriend !== this.props.activeFriend
        ) {
            this.setState({
                friendData: this.props.activeFriend
            })
        }
    }
    eventHandler = event =>{
        event.persist();
        this.setState({
            friendData:{
                ...this.state.friendData,
                [event.target.name]: event.target.value
            }
        })
    }
    submitChange =  event => {
        event.preventDefault();
        if (this.props.activeFriend){
            this.props.updateFriend(this.state.friendData)
        }
        else{
            this.props.postFriend(this.state.friendData);
        }
        this.setState({
            friendData:{
                name:"",
                age:"",
                email:""
            }

        });
        
    }
    render(){
        return (
            <form className="friend-form" onSubmit={this.submitChange}>
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
                    placeholder="email"
                    onChange={this.eventHandler}
                    value = {this.state.friendData.email} 
                />
                <button>{this.props.activeFriend ? "UPDATE":"ADD"} FRIEND</button>
            </form>
        );
    }
}