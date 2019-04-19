import React, { Component } from 'react';
import './App.css';

import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './components/authentication/withAuthenticate';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }


  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

export default App;
