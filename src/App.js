import React, { Component } from 'react';
import UserCardList from './components/UserCardList';
import Search from './components/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: []
  };

  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    this.setState({ users: res.data.items });
  };

  render() {
    const { users } = this.state;

    return (
      <div className='App'>
        <h1>GitHub Users</h1>
        <Search searchUsers={this.searchUsers} />
        <UserCardList users={users} />
      </div>
    );
  }
}

export default App;
