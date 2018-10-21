import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Calculator from './components/Calculator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

var store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Calculator />
    </Provider>,
    document.getElementById('root')
);