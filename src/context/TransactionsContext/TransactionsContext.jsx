/* eslint-disable react-refresh/only-export-components */
import axios from 'axios';
import {createContext, useContext, useState} from 'react';
import {TRANSACTIONS_API_URL} from '../../utils/api/apiURL';

const TransactionsContext = createContext();

export const useTransactions = () => {
  return useContext(TransactionsContext);
};

const TransactionsProvider = ({children}) => {
  const [transactions, setTransactions] = useState([]);
  const [isSyncing, setIsSyncing] = useState(false);

  const toggleSyncing = () => {
    setIsSyncing(!isSyncing);
  };

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

    try {
      for (const wallet of wallets) {
        const walletName = wallet.name;

        for (const chain of wallet.chains) {
          for (const chain_addresse of chain.chain_addresses) {
            const address = chain_addresse.address;
            const transactions = await fetchTransactionsForAddress(
              address,
              walletName
            );
            allTransactions.push(...transactions);
          }
        }
      }

      setTransactions(allTransactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    } finally {
      toggleSyncing();
    }
  };

  return (
    <TransactionsContext.Provider
      value={{transactions, fetchTransactions, isSyncing, toggleSyncing}}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
