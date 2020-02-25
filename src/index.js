import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import store from "./components/redux/store";

import App from "./components/app/app";


function render() {
    ReactDOM.render(
        (
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        ),
        document.getElementById('root')
    );
}

// 初始化渲染
render();
// 订阅变化
store.subscribe(render);
