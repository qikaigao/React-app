import React,{Component} from "react";
import {NavLink, Switch,Route,Redirect} from 'react-router-dom';
import About from '../../views/about/about';
import Home from '../../views/home/home';
import MyNavLink from '../../components/MyNavLink/MyNavLink';

class App extends Component{
    render() {
        return (
            <div className='container'>
                <div className='row justify-content-xs-center'>
                    <div className='col-xs-8 col'>
                        <div className='pb-2 mt-4 mb-2 border-bottom'><h2>React Router Demo</h2></div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-xs-2 offset-xs-2'>
                        <div className='list-group' >
                            <MyNavLink className='list-group-item' to='/about' >About</MyNavLink>
                            <MyNavLink className='list-group-item ' to='/home' >Home</MyNavLink>
                        </div>
                    </div>
                    <div className='col-xs-6 col'>
                        <div className='card'>
                            <div className='card-body'>
                                <Switch>
                                    <Route path="/about"><About /></Route>
                                    <Route path="/home"><Home /></Route>
                                    <Redirect to="/home"/>
                                </Switch>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    };
}

export default App;