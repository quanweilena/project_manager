import { createStore } from 'redux';
import reducer from './reducer';
// import logger from 'redux-logger';

// let fincalCreateStore = compose(
// 		applyMiddleware(logger())
// 	)(createStore);

export default function configureStore(initialState = { projects: [] }) {
	return createStore(reducer, initialState);
}