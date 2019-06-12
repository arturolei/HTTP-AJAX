import React from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      friendsData:[]
    }
  }
  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then(friendsData => this.setState({friendsData:friendsData.data}))
    .catch(err => console.log(err));
  }

  addFriend = (friend) => {
    axios
    .post('http://localhost:5000/friends', friend)
    .then(response => console.log("success",response))
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
        <FriendsList friends={this.state.friendsData}/>
        <FriendForm postFriend = {this.addFriend}/>
      </div>
    );
  }
}
