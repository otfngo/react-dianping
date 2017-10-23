import * as ActionTypes from './actionTypes'
import axois from 'axios'

const getDetailInfo = (shopId) => {
    return dispatch => axois.get('/api/detail/info/' + shopId)
        .then((res) => {
            dispatch(saveDetailInfo(res.data))
        })
        .catch(error => {
            console.log(error)
        })
}

const saveDetailInfo = (object) => {
    return {
        type: ActionTypes.GET_DETAIL_INFO,
        payload: {
            info: object
        }
    }
}

const getComments = (shopId) => {
    return dispatch => {
        axois.get('/api/detail/comment/' + shopId)
            .then((res) => dispatch(saveComments(res.data)))
            .catch(err => {
                console.log(err)
            })
    }
}

const saveComments = (object) => {
    return {
        type: ActionTypes.GET_COMMENT_LIST,
        payload: {
            comments: object
        }
    }
}

export {
    getDetailInfo,
    saveDetailInfo,
    getComments,
    saveComments
}