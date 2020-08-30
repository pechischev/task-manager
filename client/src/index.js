import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {createLoguxCreator} from '@logux/redux';
import {badge, badgeEn, log} from '@logux/client';
import {badgeStyles} from '@logux/client/badge/styles';

import reducer from './reducers';

import App from './app/App';

const createStore = createLoguxCreator({
    subprotocol: '1.0.0',
    server: process.env.NODE_ENV === 'development'
        ? 'ws://localhost:31337'
        : 'wss://logux.example.com',
    userId: 'todo',  // TODO: We will fill it in Authentication recipe
    token: '' // TODO: We will fill it in Authentication recipe
});

const store = createStore(reducer);
badge(store.client, {messages: badgeEn, styles: badgeStyles});
log(store.client);
store.client.start()

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
