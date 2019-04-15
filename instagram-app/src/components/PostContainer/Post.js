import React from 'react';

import './PostContainer.css'

const Post = props =>{
    console.log(props)
    return(
        <div className='post-container'>
            <div className='user'>
                <img 
                alt={props.post.id + 'Pic'}
                src={props.post.thumbnailUrl} /> 
                <h2>{props.post.username}</h2>
            </div>
            <div className='pic'>
                <img 
                alt={props.post.id + 'Pic'}
                src={props.post.imageUrl} />
            </div>
        </div>
    )
}

export default Post;