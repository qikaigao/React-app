import React,{Component} from "react";
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';
import axios from 'axios';
import './main.css';

class Main extends Component{

    state = {
        initView:true,
        loading:false,
        users:null,
        errorMsg:null
    };

    componentDidMount() {

    //    订阅消息( search )
        PubSub.subscribe('search', (msg,searchName)=>{
            console.log('ss')
            // 更新状态(请求中)
        this.setState({
            initView:false,
            loading:true
        });

        // 发送ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`;
        axios.get(url)
            .then(response => {
            //    得到响应数据
                const result = response.data;
                // console.log(result);
                const users = result.items.map(item => ({
                    name:item.login,
                    url:item.html_url,
                    avatarUrl:item.avatar_url
                }));
                console.log(users);
            //    更新状态
                this.setState({loading:false,users})

            })
            .catch(error => {
                this.setState({loading:false,errorMsg:error.message})
            })
        });

    }




    //
    // // 当组件接受到新的属性时回掉
    // UNSAFE_componentWillReceiveProps(nextProps){ //指定了新的searchName， 需要请求
    //      const {searchName} = nextProps;
    //     // console.log(searchName);
    //
    //     // 更新状态(请求中)
    //     this.setState({
    //         initView:false,
    //         loading:true
    //     });
    //
    //     // 发送ajax请求
    //     const url = `https://api.github.com/search/users?q=${searchName}`;
    //     axios.get(url)
    //         .then(response => {
    //         //    得到响应数据
    //             const result = response.data;
    //             // console.log(result);
    //             const users = result.items.map(item => ({
    //                 name:item.login,
    //                 url:item.html_url,
    //                 avatarUrl:item.avatar_url
    //             }))
    //             console.log(users);
    //         //    更新状态
    //             this.setState({loading:false,users})
    //
    //         })
    //         .catch(error => {
    //             this.setState({loading:false,errorMsg:error.message})
    //         })
    // }

    render() {
        const {initView, loading, users,errorMsg} = this.state;

        if(initView) {
            return <h2>请输入关键字进行搜索</h2>
        }else if(loading){
            return <h2>正在请求中</h2>
        }else if(errorMsg) {
            return <h2>{errorMsg}</h2>
        }else{
            return (
            <div className='row'>
                {users.map((user,index) => (
                    <div className='card' key={index}>
                        <a href={user.url} target='_blank'>
                            <img src={user.avatarUrl} style={{width: 100}} alt={user.avatarUrl}/>
                        </a>
                        <p className='card-text'>{user.name}</p>
                    </div>
                ))}
            </div>
        )}

    }
}
export default Main;