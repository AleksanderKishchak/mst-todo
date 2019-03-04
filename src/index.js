import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import store from './models/RootStore';

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
