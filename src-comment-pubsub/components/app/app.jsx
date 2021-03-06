import React,{Component} from "react";
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";
import PubSub from 'pubsub-js';

class App extends Component{

    //  // 给组件对象指定state属性
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         comments: [
    //             {username:'Tom', content:'React挺好的！'},
    //             {username:'Jack', content:'React太难了！'},
    //             {username:'Ross', content:'React so easy！'},
    //         ]
    //     }
    // }

    state = {
        comments: [
            {username:'Tom', content:'React挺好的！'},
            {username:'Jack', content:'React太难了！'},
            {username:'Ross', content:'React so easy！'},
        ]
    };

    componentDidMount() {
        // 订阅消息(deleteComment)
        PubSub.subscribe('deleteComment', (msg,index) => {
            this.deleteComment(index);
        });
    }

    //添加评论
    addComment = (comment) => {
        const {comments} = this.state;
        comments.unshift(comment);
        // 更新状态
        this.setState({comments})
    };

    //删除指定评论
    deleteComment = (index) => {
        const {comments} = this.state;
        comments.splice(index,1);// 删除
         // 更新状态
        this.setState({comments})
    };

    render() {
        const {comments} = this.state;
        return (
            <div>
                <header className='site-header jumbotron'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xs-12'>
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='container'>
                    <div className='row'>
                        <CommentAdd addComment={this.addComment}/>
                        <CommentList comments={comments} deleteComment={this.deleteComment}/>
                    </div>

                </div>
            </div>
        )
    };
}

export default App;