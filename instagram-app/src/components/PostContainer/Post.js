import React from 'react';

import CommentSection from '../CommentSection/CommentSection';

import '../PostContainer/PostContainer.css'


const Post = props =>{
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
            
            <div className='likes'>
                <h4>{props.post.likes + ' Likes'}</h4>
            </div>
            
                <CommentSection comments={props.post.comments} />

            <div className='new-comment'>
                <form>
                    <input type="text" placeholder='Add a comment...' />
                </form>
                <span>&#183;&#183;&#183;</span>
            </div>
        </div>
    )
}

export default Post;