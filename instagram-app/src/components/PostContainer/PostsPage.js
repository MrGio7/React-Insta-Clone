import React from 'react';

import DummyDatta from '../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        posts: [],
        filteredPosts: []
      }
    }
  
    searchHandle = e =>{
      let posts = this.state.posts.filter(p => {
        console.log(e.target.value)
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
  
  export default PostsPage;
  