import React from "react";
import {render} from "react-dom";
import App from "./components/app/app";
import {BrowserRouter} from 'react-router-dom';


render(
    (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ),
    document.getElementById('root')
);



// import React from "react";
// import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
// import App from "./components/app/app";
// ReactDOM.render(
//     (
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     ),
//      document.getElementById('root')
// );
//
//
