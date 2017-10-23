import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'
import { updateCity } from '../actions/userinfo'
import { USER_CURRENT_CITY, USER_DEFAULT_CITY } from '../config/keysDefine'
import Home from '../containers/Home'
import City from '../containers/City'
import Detail from '../containers/Detail'
import Search from '../containers/Search'
import NotFound from '../containers/NotFound'
import User from '../containers/User'

import '../../static/css/common.less'
import '../../static/css/font.css'

const history = createHistory()

class App extends React.Component {
    componentDidMount() {
        let cityName = localStorage.getItem(USER_CURRENT_CITY)
        cityName = cityName || USER_DEFAULT_CITY
        this.props.updateCity(cityName)
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/city" component={City}></Route>
                    <Route path="/search/:keyword" component={Search}></Route>
                    <Route path="/detail/:id" component={Detail}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </Router>
        )
    }
}

function mapStateToProps() {
    return {

    }
}

function mapDispatchToProps(dispatch, ownprops) {
    return {
        updateCity: (cityName) => {
            dispatch(updateCity(cityName))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)