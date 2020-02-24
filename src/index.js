import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter} from 'react-router-dom';
import App from "./components/app/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ),
     document.getElementById('root')
);


