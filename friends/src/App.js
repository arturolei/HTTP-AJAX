import React from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList';

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
  render(){
    return (
      <div className="App">
        <FriendsList friends={this.state.friendsData}/>
      </div>
    );
  }
}
