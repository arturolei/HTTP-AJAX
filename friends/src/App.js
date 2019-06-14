import React from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      friendsData:[],
      activeFriend: null
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
    .then(res => this.setState({friendsData:res.data}))
    .catch(err => console.log(err));
    window.location.reload();
  }

  deleteFriend = (id) =>{
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => console.log("delete is a go", response))
      .catch(err => console.log(err));
    window.location.reload();
  }


  updateFriend = (friend)=> {
    axios
    .put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then(response => this.setState({
      activeFriend: null,
      friendsData: response.data
    }))
    .catch(err => console.log(err));
    window.location.reload();

  }
  
  //Designates which friend is going to be updated
  setUpdateMode = (friend) =>{
    this.setState({
      activeFriend:friend
    })
  }

  render(){
    return (
      <div className="App">
        <FriendsList friends={this.state.friendsData} deleteFriend={this.deleteFriend} setUpdateMode={this.setUpdateMode}/>
        <FriendForm activeFriend={this.state.activeFriend} postFriend = {this.addFriend} updateFriend={this.updateFriend}/>
      </div>
    );
  }
}
