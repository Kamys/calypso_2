import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './redux/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './redux/saga/rootSaga'
import createSagaMiddleware from 'redux-saga'
import {loadStore, saveStore} from "./LocalStorage";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    loadStore()
    ,
    composeWithDevTools(applyMiddleware(sagaMiddleware)));

store.subscribe(() => {
    saveStore(store.getState());
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
