/*
包含所有的action creator
同步action返回的是一个对象
异步action返回的是一个函数
 */

// 增加
import {INCREMENT,DECREMENT} from "./action-type";

// 增加
export const increment = (number) => ({type:INCREMENT,data:number});
//减少
export const decrement = (number) => ({type:DECREMENT,data:number});
// 异步action
export  const incrementAsync = (number) => {
    return dispatch => {
    //      异步代码
        setTimeout(() => {
            // 1s之后采取分发一个增加的action
            dispatch(increment(number));
        },1000);
    };
};