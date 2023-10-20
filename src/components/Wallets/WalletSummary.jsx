import '../../styles/walletsummary.css';
import trashIcon from '../../assets/trash-2.svg';
import BtcIcon from '../../assets/Group163.svg';

const WalletSummary = ({name, balance}) => {
  return (
    <div className='wallet-summary-main'>
      <div className='wallet-summary-name'>
        <div className='wallet-summary-balance-amount-icon'>
          <img src={BtcIcon} />
        </div>
        <div className='wallet-summary-name-text'>{name}</div>
      </div>

      <div className='wallet-summary-balance-amount-text'>BTC {balance}</div>

      <div className='trash'>
        <img src={trashIcon} />
      </div>
    </div>
  );
};

export default WalletSummary;