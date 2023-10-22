import '../../styles/transactionsdashboard.css';
import TransactionsSummary from './TransactionsSummary';
import {useTransactions} from '../../context/TransactionsContext/TransactionsContext';
import {useWallets} from '../../context/WalletsContext/WalletsContext';

const TransactionsDashboard = () => {
  const {transactions, fetchTransactions} = useTransactions();
  const {wallets} = useWallets();

  fetchTransactions(wallets);

  const transformed = transactions.map(transaction => {
    const balance = transaction.total / 100000000;

    let type, timestamp;

    if (transaction.received) {
      type = 'RECEIVED';
      timestamp = transaction.received;
    } else if (transaction.sent) {
      type = 'SENT';
      timestamp = transaction.sent;
    }

    const dateObj = new Date(timestamp);
    const date = dateObj.toISOString().split('T')[0];
    const time = dateObj.toTimeString().split(' ')[0];

    return {
      type,
      balance,
      walletName: transaction.walletName,
      date,
      time
    };
  });

  return (
    <div className='tx-container'>
      <button className='sync-button'>Sync</button>

      <div className='tx-header'>
        <span>Total Transactions - 03</span>
      </div>

      <div className='tx-table'>
        <div className='tx-table-header'>
          <span>Coin</span>
          <span>Date & Time</span>
          <span>Wallet</span>
          <span>Amount</span>
          <span>Result</span>
          <span>Status</span>
        </div>

        <div className='tx-coin-rows'>
          {transformed.map((tx, index) => (
            <TransactionsSummary
              key={index}
              date={tx.date}
              time={tx.time}
              walletName={tx.walletName}
              balance={tx.balance}
              type={tx.type}
              status={`SUCCESS`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsDashboard;
