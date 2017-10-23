import * as actionTypes from './actionTypes'
import axois from 'axios'

const initCity = (cityName) => {
    return {
        type: actionTypes.USER_CURRENTCITY,
        payload: {
            cityName: cityName
        }
    }
}

const updateCity = (cityName) => {
    return {
        type: actionTypes.USER_CURRENTCITY,
        payload: {
            cityName: cityName
        }
    }
}

const getHomeAd = () => {
    return dispatch => axois.get('/api/homead')
        .then((res) => {
            dispatch(saveHomeAd(res.data))
        })
        .catch((error) => {
            console.log(error)
        })
}

const saveHomeAd = (object) => {
    return {
        type: actionTypes.SAVE_HOMEAD,
        payload: {
            homeAd: object
        }
    }
}

const getLikeList = (city, page) => {
    return dispatch => {
        dispatch(setLikeListLoading(true))
        axois.get('/api/homelist/' + city + '/' + page)
            .then((res) => {
                dispatch(saveLikeList(res.data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const saveLikeList = (object) => {
    return {
        type: actionTypes.SAVE_LIKELIST,
        payload: {
            likeList: object.data,
            isLoading: false
        }
    }
}

const setLikeListLoading = (flag) => {
    return {
        type: actionTypes.SET_ISLOADINGLIKELIST_FLAG,
        payload: {
            isLoading: flag
        }
    }
}

const getOrderList = () => {
    return dispatch => axois.get('/api/user/orderlist')
        .then((res) => {
            dispatch(saveOrderList(res.data))
        })
        .catch((error) => {
            console.log(error)
        })
}

const saveOrderList = (object) => {
    return {
        type: actionTypes.GET_COMMENT_LIST,
        payload: {
            orderList: object
        }
    }
}

export {
    initCity,
    updateCity,
    getHomeAd,
    saveHomeAd,
    getLikeList,
    saveLikeList,
    setLikeListLoading,
    getOrderList,
    saveOrderList
}