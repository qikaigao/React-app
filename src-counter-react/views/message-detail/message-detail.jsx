import React from "react";
import {useParams} from 'react-router-dom';

const allMessages = [
    {id:1,title:'message001',content:'aaaaaaaaaaa'},
    {id:3,title:'message003',content:'bbbbbbbb'},
    {id:5,title:'message005',content:'cccccccc'},
];
export default function MessageDetail(props) {

    // 得到请求参数中的id
    const {id} = useParams();
    // 查询的到对应的message
    const message = allMessages.find((m) => m.id === id*1); // 返回第一个结果为true的数组元素
    // debugger
    return (
        <ul>
            <li> ID: {message.id}</li>
            <li> TITLE: {message.title}</li>
            <li> CONTNT: {message.content}</li>
        </ul>
    )
}