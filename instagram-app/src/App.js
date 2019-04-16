import React, { Component } from 'react';
import './App.css';
import DummyDatta from './dummy-data';

import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';

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
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
