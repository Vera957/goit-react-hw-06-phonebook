import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/theme';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
