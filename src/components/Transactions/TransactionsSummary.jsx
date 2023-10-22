import '../../styles/transactionssummary.css';
import BtcIcon from '../../assets/Group163.svg';

const TransactionsSummary = props => {
  const {date, time, walletName, balance, type, status} = props;

  return (
    <div className='tableContainer'>
      <div className='tableRow'>
      <img src={BtcIcon} alt='BTC' className='btcIcon' />
        <div className='tableCell date'>
          <div className='day'>{date}</div>
          <div className='time'>{time}</div>
        </div>

        <div className='tableCell name'>{walletName}</div>

        <div className='tableCell btc'>
          {balance}
        </div>

        <div className='tableCell received'>
          <span className='receivedLabel'>{type}</span>
        </div>

        <div className='tableCell status'>{status}</div>
      </div>
    </div>
  );
};

export default TransactionsSummary;
