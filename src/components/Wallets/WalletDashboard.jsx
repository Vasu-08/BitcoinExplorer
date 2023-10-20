import {useState} from 'react';
import '../../styles/walletdashboard.css';
import WalletSummary from './WalletSummary';
import ImportWalletForm from './ImportWalletForm';

const WalletDashboard = () => {
  const [showModal, setShowModal] = useState(false);

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
        <span>Total Coins - 7</span>
      </div>

      <div className='coin-table'>
        <div className='table-header'>
          <span>Coin</span>
          <span>Holding</span>
          <span>Actions</span>
        </div>

        <div className='coin-rows'>
          <WalletSummary name='Vasu' balance={20} />
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
