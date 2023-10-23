import {useState} from 'react';
import '../../styles/walletdashboard.css';
import WalletSummary from './WalletSummary';
import ImportWalletForm from './ImportWalletForm';
import {useWallets} from '../../context/WalletsContext/WalletsContext';

const WalletDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const {wallets} = useWallets();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='wallet-container'>
      <button className='import-button' onClick={openModal}>
        + IMPORT WALLET
      </button>

      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close-button' onClick={closeModal}>
              &times;
            </span>
            <ImportWalletForm onClose={closeModal} />
          </div>
        </div>
      )}

      <div className='wallet-header'>
        <span>Total Wallets - {wallets.length}</span>
      </div>

      <div className='coin-table'>
        <div className='table-header'>
          <span>Wallet</span>
          <span>Holding</span>
          <span>Actions</span>
        </div>

        <div className='coin-rows'>
          {wallets.map((wallet, index) => (
            <WalletSummary key={index} name={wallet.name} balance={20} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
