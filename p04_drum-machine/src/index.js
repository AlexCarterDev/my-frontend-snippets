import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App'

const store = createStore(rootReducer);
console.log('Store');
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


