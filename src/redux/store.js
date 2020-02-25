import {createStore} from "redux";
import {counter} from "./reducers";


// 生成一个 store 对象
const store = createStore(counter); // 内部会第一次调用reducer函数的到初始state

export default store;