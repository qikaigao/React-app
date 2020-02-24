import React,{Component} from "react";
import {NavLink} from "react-router-dom";

export default class MyNavLink extends Component{

    render() {
        // 将外部传入的所有属性传入给NavLink
        return <NavLink {...this.props} activeClassName='activeClass' />;
    }

}
