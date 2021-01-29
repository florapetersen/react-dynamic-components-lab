//your code here
import React, { Component } from 'react';

class Comment extends Component {
    // every class based component needs a render method // 
    render () {
        return (
            <div className="comment">
                {this.props.commentText} 
            </div>
        )
    }
}

export default Comment;
