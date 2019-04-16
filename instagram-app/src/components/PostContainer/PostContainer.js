import React from 'react';

import Post from './Post';
import Comments from '../CommentSection/Comments';

const PostContainer = props =>{
    return(
        <div>
            {props.posts.map(i => <Post key={i.id} post={i} /> )}
        </div>
    )
}

export default PostContainer;