import '../../styles/walletdashboard.css';
import WalletSummary from './WalletSummary';

const WalletDashboard = () => {
  return (
    <div className='wallet-main'>
      <WalletSummary name='Vasu' balance={20} />
      <WalletSummary name='Bob' balance={30} />
    </div>
  );
};

export default WalletDashboard;
