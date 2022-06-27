import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: 'rtl',
});

function RTL(props) {
  return <CacheProvider value={cacheRtl}> <ThemeProvider theme={theme}>{props.children}</ThemeProvider></CacheProvider>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RTL>
        <App />
      </RTL>
    </Provider>
  </React.StrictMode>
);
