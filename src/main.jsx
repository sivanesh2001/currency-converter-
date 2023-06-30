import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CurrencyProvider from './context/CurrencyContext.jsx';
import FixedContainer from './page2/container.jsx';
import Header from './page2/header.jsx';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
    <FixedContainer />
  </>
);

document.title = 'Currency Converter';
document.querySelector('link[rel="shortcut icon"]').href = CurrencyExchangeIcon.render().props.icon[1];
