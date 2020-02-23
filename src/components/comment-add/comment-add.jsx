import React, {Component} from "react";

class CommentAdd extends Component{
    render() {
        return (
            <div className='col-md-4'>
                <form className='form-horizontal'>
                    <div className='form-group'>
                        <label>用户名</label>
                        <input type='text' className='form-control' placeholder='用户名' />
                    </div>
                    <div className='form-group'>
                        <label>评论内容</label>
                        <textarea className='form-control' rows='6' placeholder='评论内容'/>
                    </div>
                    <div className='form-group'>
                         <div className='offset-md-2 '>
                            <button type='button' className='btn btn-primary float-right'>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
}

export default CommentAdd;