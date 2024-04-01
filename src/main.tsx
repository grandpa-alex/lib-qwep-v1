import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Main from './test/Main';
import { TestApp } from './test/test-app/TestApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* <Main />{' '} */}
        <TestApp />
    </React.StrictMode>
);
