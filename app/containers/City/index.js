import React from 'react'
import { connect } from 'react-redux'

import { updateCity } from '../../actions/userinfo'
import { USER_CURRENT_CITY } from '../../config/keysDefine'

import Header from '../../components/Header'
import CurrentCity from './subpages/CurrentCity'
import CityList from '../../components/CityList'

class City extends React.Component {
    constructor(props) {
        super(props)
        this.chooseCity = this.chooseCity.bind(this)
        this.goBack = this.goBack.bind(this)
    }

    chooseCity(cityName) {
        localStorage.setItem(USER_CURRENT_CITY, cityName)
        this.props.updateCity(cityName)
        this.props.history.goBack()
    }

    goBack() {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <Header title="选择城市" goBack={this.goBack}></Header>
                <CurrentCity cityName={this.props.userInfo.cityName}></CurrentCity>
                <CityList chooseCity={this.chooseCity}></CityList>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userinfo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateCity: (cityName) => {
            dispatch(updateCity(cityName))
        }
    }
}

City = connect(
    mapStateToProps,
    mapDispatchToProps
)(City)

export default City