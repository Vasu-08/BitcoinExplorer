import axios from 'axios';
import {createContext, useContext, useState} from 'react';
import {TRANSACTIONS_API_URL} from '../../utils/api/apiURL';

const TransactionsContext = createContext();

export const useTransactions = () => {
  return useContext(TransactionsContext);
};

const TransactionsProvider = ({children}) => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactionsForAddress = async (address, walletName) => {
    const url = `${TRANSACTIONS_API_URL}${address}/full`;
    const res = await axios.get(url);

    return res.data.txs.map(transaction => ({
      ...transaction,
      walletName: walletName
    }));
  };

  const fetchTransactions = async wallets => {
    const allTransactions = [];

    for (const wallet of wallets) {
      const walletName = wallet.name;

      for (const chain of wallet.chains) {
        const chainAddressesPromises = chain.chain_addresses.map(
          chain_address => fetchTransactionsForAddress(chain_address.address, walletName)
        );

        const chainResults = await Promise.all(chainAddressesPromises);
        allTransactions.push(...chainResults.flat());
      }
    }

    setTransactions(allTransactions);
  };

  return (
    <TransactionsContext.Provider value={{transactions, fetchTransactions}}>
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
