import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class Counter extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    };


    increment = () => {
        //    1. 得到选择增加数量
        const number = this.select.value * 1;
        //  调用store的方法更新状态
        this.props.increment(number);
    };

    decrement = () => {
        //    1. 得到选择增加数量
        const number = this.select.value * 1;

        this.props.decrement(number);

    };

    incrementIfOdd = () => {
        //    1. 得到选择增加数量
        const number = this.select.value * 1;

        //    2. 得到原本count状态
        const count = this.props.count;

        // 满足条件才更新状态
        if (count % 2 === 1) {
            // 3.更新
            this.props.increment(number);
        }
    };

    incrementAsync = () => {
        //    1. 得到选择增加数量
        const number = this.select.value * 1;

        this.props.incrementAsync(number);

        // //    3.延迟更新
        // setTimeout(() => {
        //     this.props.increment(number);
        // }, 1000);

    };


    render() {
        const {count} = this.props;
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
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    &nbsp;
                    <button onClick={this.incrementAsync}>increment if async</button>
                    &nbsp;
                </div>
            </div>
        )
    };
}

