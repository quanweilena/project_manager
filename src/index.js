import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import uuid from 'uuid';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

let initialState = {
	    projects: [
	  {
	    id:uuid.v4(),
	    title: 'Business website',
	    category: 'Web design'
	  },
	  {
	    id:uuid.v4(),
	    title: 'Social app',
	    category: 'Mobile development'
	  },
	  {
	    id:uuid.v4(),
	    title: 'Ecommerce shopping cart',
	    category: 'Web development'
	  }
	]
};

let store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
