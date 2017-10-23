import React from 'react'
import LikeItem from './subs/LikeItem'
import './style.less'

class LikeList extends React.Component {
    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                <div className="list-container">
                    {
                        this.props.likeList.map((item, index) => {
                            return <LikeItem key={index} data={item}></LikeItem>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default LikeList



