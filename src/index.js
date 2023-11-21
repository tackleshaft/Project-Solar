import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';

console.log('root', App)
ReactDOM.render(<App />, document.getElementById('root'))