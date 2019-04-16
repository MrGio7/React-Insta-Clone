import React from 'react';

const Comments = props =>{
    return(
        <div className='comment-block'>

            <div className='comments'>
                <h4>{props.comments.username}</h4>
                {props.comments.text}
            </div>
            
            <div className='new-comments'>
            </div>
        </div>
    )
}

export default Comments;