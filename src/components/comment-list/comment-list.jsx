import React,{Component} from "react";
import './comment-list.css';

class CommentList extends Component{
    render() {
        return (
            <div className='col-md-8'>
                <h3 className='reply'>评论回复: </h3>
                <h2 className={{display:'none'}}>暂无评论，点击左侧添加评论!!!</h2>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <div className='handle'>
                            <a href='#'>删除</a>
                            <p className='user'><span>xxx</span> <span>说:</span></p>
                            <p className='centence'>React不错</p>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <div className='handle'>
                            <a href='#'>删除</a>
                            <p className='user'><span>yyy</span> <span>说:</span></p>
                            <p className='centence'>React有点难</p>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <div className='handle'>
                            <a href='#'>删除</a>
                            <p className='user'><span>zzz</span> <span>说:</span></p>
                            <p className='centence'>React太难了</p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    };
}

export default CommentList;