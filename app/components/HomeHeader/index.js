import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '../../components/SearchInput'
import './style.less'

class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.searchHandle = this.searchHandle.bind(this)
        this.state = {};
    }
    
    searchHandle(keyword) {
        this.props.search(keyword)
    }

    render() {
        return (
            <div className="home-header">
                <Link to="/city">
                    <div className="header-left">
                        {this.props.cityName}
                        <i className="icon-angle-down"></i>
                    </div>
                </Link>
                <div className="header-center">
                    <i className="icon-search"></i>
                    <SearchInput value='' search={this.searchHandle} />
                </div>
                <Link to="/user">
                    <div className="header-right"><i className="icon-user"></i></div>
                </Link>
            </div>
        )
    }
}

export default HomeHeader