import React from 'react';

import PostsPage from '../PostContainer/PostsPage';
import LoginPage from '../Login/LoginPage';

const withAuthenticate = postsPagePar => loginPagePar => 
    class extends React.Component{
        constructor(props){
            super(props);

            this.state = {
                login: false
            }
        }

        componentDidMount() {
            if (!localStorage.getItem('user')) {
              this.setState({ login: false });
            } else {
              this.setState({ login: true });
            }
          }
        
    render(){
        if(this.state.login) return <PostsPage />;
        return <LoginPage />
        }
    }



    export default withAuthenticate;