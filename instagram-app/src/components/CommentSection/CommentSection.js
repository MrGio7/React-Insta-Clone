import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';

import './CommentSection.css'

const CommentSection = props =>{
  console.log(props)
    return(
        <div className='comment-section'>
            {props.comments.map(i => <Comments key={i.id} comments={i} /> )}
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };

export default CommentSection;