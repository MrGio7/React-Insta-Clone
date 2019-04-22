import React, { Component } from 'react';
import './App.css';
import DummyDatta from './dummy-data';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      filteredPosts: []
    }
  }

  searchHandle = e =>{
    let posts = this.state.posts.filter(p => {
      return p.username.includes(e.target.value)
    });
    this.setState({filteredPosts: posts})
  }

  componentDidMount() {
    this.setState ({
      posts: DummyDatta,
      filteredPosts: DummyDatta
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className='header-nav'>
          <SearchBar
            search={this.searchHandle}
          />
        </div>
        <PostContainer posts={this.state.filteredPosts} />
      </div>
    );
  }
}

export default App;
