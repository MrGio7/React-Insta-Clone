import React from 'react';

import CommentSection from '../CommentSection/CommentSection';

import '../PostContainer/PostContainer.css'


class Post extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            comments: this.props.post.comments,
            newComment: '',
            likes: this.props.post.likes
        }
    }

    handleChanges = e =>{
        this.setState({ newComment: e.target.value })
    };

    submitItem = e =>{
        e.preventDefault();
        this.setState({newComment: ''});
        this.addArray(this.state.newComment)
    }

    addArray = item =>{
        const copieadArray = this.state.comments.slice();
        const newArray = {
            id: Date.now(),
            username: 'new user',
            text: item,
        }
        
        copieadArray.push(newArray)

        this.setState({
            comments: copieadArray
        })
    }

    likeBtn = () =>{
        let copiedLikes = this.state.likes;

        this.setState({
            likes: ++copiedLikes
        })
    }



    render(){
        console.log(this.state.likes)
    return(
        <div className='post-container'>
            <div className='user'>
                <img 
                alt={this.props.post.id + 'Pic'}
                src={this.props.post.thumbnailUrl} /> 
                <h2>{this.props.post.username}</h2>
            </div>

            <div className='pic'>
                <img 
                alt={this.props.post.id + 'Pic'}
                src={this.props.post.imageUrl} />
            </div>

            <div className='like-share-btns'>
                <div className='like-btn' onClick={this.likeBtn}></div>
                <div className='comment-btn'></div>
                <div className='share-btn'></div>
            </div>
            
            <div className='likes'>
                <h4>{this.state.likes + ' Likes'}</h4>
            </div>
            
                <CommentSection comments={this.state.comments} addArray={this.addArray} />

            <div className='new-comment'>
                <form onSubmit={this.submitItem}>
                    <input 
                        type="text" 
                        placeholder='Add a comment...' 
                        onChange={this.handleChanges}
                        value={this.state.newComment}
                    />
                </form>
                <span>&#183;&#183;&#183;</span>
            </div>
        </div>
    )
}
}

export default Post;