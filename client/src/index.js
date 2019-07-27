import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './style.scss';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './store/reducers';

import App from './App';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
    <Provider
        store={
            createStoreWithMiddleware(
                Reducer,
                window.__REDUX_DEVTOOLS_EXTENSION__ && 
                window.__REDUX_DEVTOOLS_EXTENSION__())
        }
    >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('satchel'));
    
serviceWorker.register();
