import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import './style.less'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    goBack() {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <Header title="用户主页" goBack={this.goBack}></Header>
                <UserInfo userInfo={this.props.userInfo ? this.props.userInfo : ''}></UserInfo>
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

    }
}

User = connect(
    mapStateToProps,
    mapDispatchToProps
)(User)

export default User