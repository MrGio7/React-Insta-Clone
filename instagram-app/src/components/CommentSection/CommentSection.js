import React from 'react';
import Comments from './Comments';

import './CommentSection.css'

const CommentSection = props =>{
    return(
        <div className='comment-section'>
            {props.comments.map(i => <Comments key={i.id} comments={i} /> )}
        </div>
    )
}

export default CommentSection;