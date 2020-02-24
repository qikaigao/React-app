import React, {Component} from "react";
import {Route} from 'react-router-dom';
import MessageDetail from "../message-detail/message-detail";

export default class Message extends Component{
    state = {
        messages:[]
    };

    componentDidMount() {
    //    模拟发送ajax请求异步获取数据
        setTimeout(()=>{
            const messages =[
                {id:1,title:'message001'},
                {id:3,title:'message003'},
                {id:5,title:'message005'},
            ];
            // 更新状态
            this.setState({messages})
        },1000)
    }

    render() {
        return (
            <div>
                 <ul>
                    {this.state.messages.map((m,idx) => (
                        <li key={idx}>
                            <a href={`/home/message/messagedetail/${m.id}`}>{m.title}</a>
                        </li>
                    ))}
                </ul>
                <Route path={'/home/message/messagedetail/:id'}><MessageDetail/></Route>
            </div>

        );
    }
}