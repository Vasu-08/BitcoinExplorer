import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import WalletProvider from './context/WalletsContext/WalletsContext.jsx';
import TransactionsProvider from './context/TransactionsContext/TransactionsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletProvider>
      <TransactionsProvider>
        <App />
      </TransactionsProvider>
    </WalletProvider>
  </React.StrictMode>
);
