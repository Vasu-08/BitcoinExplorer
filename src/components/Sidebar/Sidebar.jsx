import {Link} from 'react-router-dom';
import '../../styles/sidebar.css';
import Card from '../Card/Card';
import walletIcon from '../../assets/Group.svg';
import transactionIcon from '../../assets/Group230.svg';

const Sidebar = () => {
  return (
    <div className='main'>
      <div className='cards'>
        <Link to='/'>
          <Card image={walletIcon} text='Wallets' />
        </Link>
        <Link to='/transactions'>
          <Card image={transactionIcon} text='Transactions' />
        </Link>
      </div>
      <div className='support'> Support</div>
    </div>
  );
};

export default Sidebar;
