import React from 'react';

class Comments extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            comments: props.comments
        }
    }

    render(){
        return(
            <div className='comment-block'>

                <div className='comments'>
                    <p> <strong>{this.state.comments.username}</strong> {this.state.comments.text}</p>
                </div>
                
            </div>
        )
    }
}

export default Comments;