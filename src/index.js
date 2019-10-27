import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import '@fortawesome/fontawesome-free/js/all.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'

import Prism from 'prismjs'

Prism.highlightAll();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
