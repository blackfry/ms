import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import{ msReducer } from './ms-specific/redux/reducers'


let store = createStore(msReducer);

const Application = (
    <Provider store={store}>
        <App />
    </Provider>);


window.store = store;
ReactDOM.render(Application, document.getElementById('root'));
