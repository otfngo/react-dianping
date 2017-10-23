import React from 'react'
import './style.less'

class CityList extends React.Component {
    constructor(props) {
        super(props)
        this.clickHandle = this.clickHandle.bind(this)
    }

    clickHandle(event) {
        const cityName = event.target.textContent
        this.props.chooseCity(cityName)
    }

    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix" onClick={this.clickHandle}>
                    <li>北京</li>
                    <li>上海</li>
                    <li>杭州</li>
                    <li>广州</li>
                    <li>苏州</li>
                    <li>深圳</li>
                    <li>南京</li>
                    <li>天津</li>
                    <li>重庆</li>
                    <li>厦门</li>
                    <li>武汉</li>
                    <li>西安</li>
                </ul>
            </div>
        )
    }
}

export default CityList