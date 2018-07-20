import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Simple from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Simple />, document.getElementById('root'));
registerServiceWorker();
