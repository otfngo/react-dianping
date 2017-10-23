import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import HomeAd from '../../components/HomeAd'
import LikeList from '../../components/LikeList'
import LoadMore from '../../components/LoadMore'
import { getHomeAd, getLikeList } from '../../actions/userinfo'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.searchHandle = this.searchHandle.bind(this)
        this.loadMoreLikeList = this.loadMoreLikeList.bind(this)
        this.state = { hasMore: true }
    }

    componentDidMount() {
        this.props.getHomeAd()
        this.props.getLikeList(this.props.userInfo.cityName, this.props.userInfo.page)
    }
    loadMoreLikeList() {
        this.props.getLikeList(this.props.userInfo.cityName, this.props.userInfo.page)
    }
    searchHandle(keyword) {
        console.log(keyword)
    }

    render() {
        const userInfo = this.props.userInfo

        return (
            <div>
                <HomeHeader cityName={userInfo.cityName} search={this.searchHandle}></HomeHeader>
                <Category></Category>
                {
                    userInfo.homeAd
                        ? <HomeAd homeAd={userInfo.homeAd}></HomeAd>
                        : <div>加载中...</div>
                }
                {
                    userInfo.likeList.length > 0
                        ? <LikeList likeList={userInfo.likeList}></LikeList>
                        : <div>加载中...</div>
                }
                <LoadMore loadMore={this.loadMoreLikeList} isLoadingMore={userInfo.isLoading} />
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
        getHomeAd: () => {
            dispatch(getHomeAd())
        },
        getLikeList: () => {
            dispatch(getLikeList())
        }
    }
}

Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default Home
