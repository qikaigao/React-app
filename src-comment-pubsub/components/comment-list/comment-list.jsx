import React,{Component} from "react";
import PropTypes from 'prop-types';
import './comment-list.css';

import CommentItem from "../comment-item/comment-item";

class CommentList extends Component{

    static propTypes = {
        comments: PropTypes.array.isRequired
    }


    render() {
        const {comments} = this.props;
        const display = comments.length > 0 ? 'none' : 'block';

        console.log(display)
        return (
            <div className='col-md-8'>
                <h3 className='reply'>评论回复: </h3>
                <h2 style={{display}} >暂无评论，点击左侧添加评论!!!</h2>
                <ul className='list-group'>
                    {
                        comments.map((c,i)=><CommentItem comment={c} key={i} index={i} />)
                    }
                </ul>
            </div>
        );
    };
}

export default CommentList;