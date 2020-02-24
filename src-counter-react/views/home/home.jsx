import React,{Component} from "react";
import MyNavLink from "../../components/my-nav-link/my-nav-link";
import {Switch,Route,Redirect} from 'react-router-dom';
import News from "../news/news";
import Message from "../message/message";

class Home extends Component{
    render() {
        return (
            <div>
                <h2>Home 组件内容</h2>
                <div>
                    <ul className='nav nav-tabs'>
                        <li className='nav-item' >
                            <MyNavLink to='/home/news' className='nav-link'>News</MyNavLink>
                        </li>
                         <li className='nav-item' >
                            <MyNavLink  to='/home/message' className='nav-link'>Message</MyNavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path='/home/news'><News/> </Route>
                    <Route path='/home/message'><Message/></Route>
                    <Redirect to='/home/news' />
                </Switch>
            </div>
        );
    }
}

export default Home;