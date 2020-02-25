import {createStore, applyMiddleware} from "redux";
import {counter} from "./reducers";
import thunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension";

// 生成一个 store 对象
const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk)) // 应用异步中间件
); // 内部会第一次调用reducer函数的到初始state

export default store;