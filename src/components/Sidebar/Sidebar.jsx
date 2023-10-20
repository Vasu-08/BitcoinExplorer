import '../../styles/sidebar.css';
import Card from '../Card/Card';
import walletIcon from '../../assets/Group.svg';
import transactionIcon from '../../assets/Group230.svg';

const Sidebar = () => {
  return (
    <div className='main'>
      <div className='cards'>
        <Card image={walletIcon} text='Wallets' />
        <Card image={transactionIcon} text='Transactions' />
      </div>
      <div className='support'> Support</div>
    </div>
  );
};

export default Sidebar;
