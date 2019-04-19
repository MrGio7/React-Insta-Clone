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

        
    render(){
        if(this.state.login) return <PostsPage />;
        return <LoginPage />
        }
    }



    export default withAuthenticate;