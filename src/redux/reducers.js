/*
包含n个reducer函数（根据老得state和action返回一个新的state）
 */
import {combineReducers} from 'redux';
import {ADD_COMMENT, DELETE_COMMENT,REVEIVE_COMMENTS} from './action-types'

// import {INCREMENT, DECREMENT} from './action-type';

 function counter(state = 0,action) {

    console.log('counter', state,action)
    switch (action.type) {
        case 'INCREMENT':
            return state + action.data;
        case 'DECREMENT':
            return state - action.data;
        default:
            return state
    }
}

 function comments(state = [],action) {
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
export default combineReducers({
    counter,
    comments
});

 // redux 向外暴露的是什么结构？{counter:2, comments:[] }
//