import React from 'react'
import Star from '../../Star'
import './style.less'

class Item extends React.Component {
    render() {
        const comment = this.props.data
        return (
            <div className="comment-item">
                <h3>
                    <i className="icon-user"></i>
                    &nbsp;
                    {comment.username}
                </h3>
                <Star star={comment.star} />
                <p>{comment.comment}</p>
            </div>
        )
    }
}

export default Item