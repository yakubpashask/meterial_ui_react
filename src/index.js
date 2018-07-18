import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import HomeScreen from './HomeScreen'
import ButtonAppBar from './ButtonAppBar'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ButtonAppBar />, document.getElementById('root'));
registerServiceWorker();
