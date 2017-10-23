import React from 'react'
import './style.less'

class HomeAd extends React.Component {
    render() {
        return (
            <div id="home-ad">
                <div className="ad-title">
                    <h2>超级特惠</h2>
                </div>
                <div className="ad-container clear-fix">
                    {
                        this.props.homeAd.map((item, index) => {
                            return (
                                <div key={index} className="ad-item float-left">
                                    <img src={item.img} alt={item.title} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default HomeAd