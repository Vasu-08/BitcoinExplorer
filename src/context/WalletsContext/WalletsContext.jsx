/* eslint-disable react-refresh/only-export-components */
import {createContext, useReducer, useContext} from 'react';
import axios from 'axios';
import {ADD_WALLET, SET_WALLETS, SET_BALANCE} from './actionTypes';
import {WALLET_API_URL} from '../../utils/api/apiURL';
const {VITE_API_TOKEN} = import.meta.env;

const WalletContext = createContext();

export const useWallets = () => {
  return useContext(WalletContext);
};

const walletReducer = (state, action) => {
  switch (action.type) {
    case ADD_WALLET:
      return [...state, action.payload];
    case SET_WALLETS:
      return action.payload;
    case SET_BALANCE:
      return state.map(wallet =>
        wallet.name === action.walletName
          ? {...wallet, balance: action.balance}
          : wallet
      );
    default:
      return state;
  }
};

const WalletProvider = ({children}) => {
  const [wallets, dispatch] = useReducer(walletReducer, [
    // {
    //   'token': '5406b767ab5f4cffbc295350f4e794a0',
    //   'name': 'Vasu1',
    //   'hd': true,
    //   'extended_public_key':
    //     'tpubDDP15Dhn9t7KY4mao5LsXNsr7H3CCjMHhw3JDhjkGqd1E38vs924fNdLTyzYmHS9dktPduDvfW7a8gjd1EFV2YyY8k2ChcLHHXYcFth88qY',
    //   'chains': [
    //     {
    //       'chain_addresses': [
    //         {
    //           'address': 'mo2NhRtmdUJ391zYG5YFkbbz1da7cXkLaR',
    //           'path': 'm/0'
    //         },
    //         {
    //           'address': 'mnNUVft5x6rzUEGRLZenJBV6JukroJxrsG',
    //           'path': 'm/1'
    //         },
    //         {
    //           'address': 'mrGnpFNC6bQ9padzADpGQmSxEND1qwS7Zw',
    //           'path': 'm/2'
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   'token': '5406b767ab5f4cffbc295350f4e794a0',
    //   'name': 'Vasu2',
    //   'hd': true,
    //   'extended_public_key':
    //     'tpubDCUgepukYADG2cRxwkD1fHsY1Z1xKHBA4PvQ8rNU6MDHSc1nHosAKDhESqNLtexEWwS6qv6wNuqBMThmXUNfPExzfob6kPDJVrDWH1JKWrb',
    //   'chains': [
    //     {
    //       'chain_addresses': [
    //         {
    //           'address': 'mtkk5R3U4Erdg1T9f8MbEmGtXRPQ3aSmQN',
    //           'path': 'm/0'
    //         },
    //         {
    //           'address': 'mfXpUk2GcVk2AZHBfcgxqwAbWRHaRyK1eZ',
    //           'path': 'm/1'
    //         }
    //       ]
    //     }
    //   ]
    // }
  ]);

  const fetchWallet = async walletName => {
    try {
      const url = `${WALLET_API_URL}/${walletName}?token=${VITE_API_TOKEN}`;
      const walletResponse = await axios.get(url);
      dispatch({type: ADD_WALLET, payload: walletResponse.data});
    } catch (error) {
      console.error('Error fetching wallet:', error);
    }
  };

  const fetchBalanceForWallet = async walletName => {
    try {
      let totalBalance = 0;
      const wallet = wallets.find(w => w.name === walletName);

      if (wallet) {
        for (let chain of wallet.chains) {
          for (let addr of chain.chain_addresses) {
            const balanceResponse = await axios.get(
              `/api/address/balance?address=${addr.address}`
            );
            totalBalance += balanceResponse.data.balance;
          }
        }

        dispatch({
          type: SET_BALANCE,
          walletName: walletName,
          balance: totalBalance
        });
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  return (
    <WalletContext.Provider
      value={{wallets, dispatch, fetchWallet, fetchBalanceForWallet}}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
