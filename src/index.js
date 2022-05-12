import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactModal from 'react-modal';
//import { BrowserRouter } from 'react-router-dom'

ReactModal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>
)