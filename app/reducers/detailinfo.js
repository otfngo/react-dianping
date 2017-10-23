import * as actinTypes from '../actions/actionTypes'

export function detailinfo(state = {}, action) {
    switch (action.type) {
        case actinTypes.GET_DETAIL_INFO:
            return {
                ...state,
                info: action.payload.info
            }
        case actinTypes.GET_COMMENT_LIST:
            return {
                ...state,
                comments: action.payload.comments
            }
        default:
            return state
    }
}