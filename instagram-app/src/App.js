import React, { Component } from 'react';
import './App.css';
import DummyDatta from './dummy-data';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(){
    super();

    this.state = {
      posts: DummyDatta
    }
  }

  render() {
    return (
      <div className="App">
        <div className='header-nav'>
          <SearchBar  />
        </div>
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
