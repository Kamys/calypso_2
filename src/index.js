import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './redux/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import registrationSaga from './redux/saga/registrationSaga'
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(registrationSaga);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
