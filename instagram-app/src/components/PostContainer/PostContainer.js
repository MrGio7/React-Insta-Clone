import React from 'react';

import Post from './Post';

const PostContainer = props =>{
    return(
        <div>
            {props.posts.map(i => <Post key={i.id} post={i} /> )}
        </div>
    )
}

export default PostContainer;