import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render( // 오직 1개의 Component만 render할 수 있음.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);