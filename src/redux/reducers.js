/*
包含n个reducer函数（根据老得state和action返回一个新的state）
 */
import {ADD_COMMENT, DELETE_COMMENT,REVEIVE_COMMENTS} from './action-types'


export function comments(state = [],action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state];
        case DELETE_COMMENT:
            return state.filter((comment,index) => index !== action.data);
        case REVEIVE_COMMENTS:
            return action.data;
        default:
            return state;
    }

}