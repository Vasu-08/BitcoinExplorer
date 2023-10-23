import '../../styles/importwallet.css';
import {useState} from 'react';
import {useWallets} from '../../context/WalletsContext/WalletsContext';

const ImportWalletForm = ({onClose}) => {
  const [formData, setFormData] = useState({
    walletName: '',
    mnemonicName: ''
  });

  const {fetchWallet} = useWallets();

  const {walletName} = formData;

  const onChangeInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (!walletName) {
      return alert('Please fill in all fields');
    }
    fetchWallet(walletName);
  };

  return (
    <div className='wallet-form'>
      <div className='close-button' onClick={onClose}>
        &times;
      </div>{' '}
      {}
      <h1 className='heading'> Import Wallet</h1>
      <form onSubmit={onSubmitHandler}>
        <div className='input-container'>
          <label>Enter your Wallet name </label>
          <input
            className='wallet-name-input'
            type='text'
            name='walletName'
            value={walletName}
            onChange={onChangeInput}
          />
        </div>

        {/* <div className='input-container'>
          <label>Enter your Mnemonic </label>
          <input
            className='mnemonic-input'
            type='text'
            value={mnemonicName}
            onChange={onChangeInput}
            name='mnemonicName'
          />
        </div> */}

        <button className='button-container'>
          <input type='submit' />
        </button>
      </form>
    </div>
  );
};

export default ImportWalletForm;
