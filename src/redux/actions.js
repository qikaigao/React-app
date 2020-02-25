/*
包含所有的action creator 工厂函数
 */

import {ADD_COMMENT, DELETE_COMMENT,REVEIVE_COMMENTS} from './action-types'

//同步添加
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment});

//同步删除
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index});

//同步接受comments  不暴露
const receiveComments = (comments) => ({type: REVEIVE_COMMENTS, data: comments});


//异步从后台获取数据
export const getComments = () => {
    return dispatch => {
        // 模拟发送ajax请求，异步获取数据
        setTimeout(() => {
            const initComments = [
                {username: 'Tom', content: 'React 挺好的'},
                {username: 'Jack', content: 'React 太难了'},
            ];
        //    分发一个同步的action
            dispatch(receiveComments(initComments));
        }, 1000);
    }
};
