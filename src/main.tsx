import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Main from './test/Main';
// import '@radix-ui/themes/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Main />{' '}
    </React.StrictMode>
);
