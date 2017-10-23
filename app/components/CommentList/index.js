import React from 'react'
import Item from './item/Item'
import './style.less'

class CommentList extends React.Component {
    render() {
        const comments = this.props.comments.data || ''
        return (
            <div>
                {
                    comments
                        ? comments.map((item, index) => {
                            return <Item key={index} data={item}></Item>
                        })
                        : ''
                }
            </div>

        )
    }
}

export default CommentList