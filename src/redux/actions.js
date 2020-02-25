/*
包含所有的action creator
 */

// 增加
import {INCREMENT,DECREMENT} from "./action-type";

export const increment = (number) => ({type:INCREMENT,data:number});
export const decrement = (number) => ({type:DECREMENT,data:number});
