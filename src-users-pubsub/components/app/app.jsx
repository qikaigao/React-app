import React,{Component} from "react";
import Main from '../main/main';
import Search from '../search/search';

class App extends Component{

    render() {
        return (
            <div className='container'>
                <Search />
                <Main />
            </div>
        )
    }
}

export default App;