import React, {Component} from "react";
import * as actions from '../redux/actions';

class App extends Component {



    increment = () => {
        //    1. 得到选择增加数量
        const number = this.select.value * 1;
    //  调用store的方法更新状态
        this.props.store.dispatch(actions.increment(number));
    };

    decrement = () => {
        //    1. 得到选择增加数量
        const number = this.select.value * 1;

        this.props.store.dispatch(actions.decrement(number));

    };

    decrementIfOdd = () => {
        //    1. 得到选择增加数量
        const number = this.select.value * 1;

        //    2. 得到原本count状态
        const count = this.props.store.getState()

        // 满足条件才更新状态
        if (count % 2 === 1) {
            // 3.更新
            this.props.store.dispatch(actions.increment(number));
        }
    };

    decrementAsync = () => {
        //    1. 得到选择增加数量
        const number = this.select.value * 1;

        //    3.延迟更新
        setTimeout(()=>{
            this.props.store.dispatch(actions.increment(number));
        },1000);

    };


    render() {
        const count = this.props.store.getState();
        // debugger
        return (
            <div>
                <p>Click {count} times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select> &nbsp;
                    <button onClick={this.increment}>+</button>
                    &nbsp;
                    <button onClick={this.decrement}>-</button>
                    &nbsp;
                    <button onClick={this.decrementIfOdd}>increment if odd</button>
                    &nbsp;
                    <button onClick={this.decrementAsync}>increment if async</button>
                    &nbsp;
                </div>

            </div>
        )
    };
}

export default App;