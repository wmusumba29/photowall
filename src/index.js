import React, {Component} from 'react';
import ReactDom from 'react-dom';
import App from './Components/App';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './redux/reducer.js'
import {Provider} from 'react-redux'

const store = createStore(rootReducer);

ReactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'))