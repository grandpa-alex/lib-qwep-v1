import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Main from './test/Main';
import { BaseThemeProvider } from './lib/general';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BaseThemeProvider>
            <Main />
        </BaseThemeProvider>
    </React.StrictMode>
);
