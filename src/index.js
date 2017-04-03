import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Container from './container/container';
import Content from './conponent/content';
import Detail from './teacher/detail';
import Login from './container/login';
import {Router, Route, hashHistory, Reidrect, IndexRedirect, IndexRoute} from 'react-router';
import Totalreducers from './reducers';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import Super from"./container/super"
let store=createStore(Totalreducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
        <Route path="/" component={Login}/>
        <Route path="/super" component={Super}/>
        <Route path="/teacher" component={Container}>
            <IndexRoute component={Detail}/>
            <Route path="index" component={Content}/>
            <Route path="detail" component={Detail}/>
        </Route>
    </Router>
    </Provider>,
    document.getElementById('root')
);
