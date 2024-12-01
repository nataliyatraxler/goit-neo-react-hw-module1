import transactions from './transactions.json';
import TransactionHistory from './TransactionHistory';

const TransactionHistoryApp = () => {
  return (
    <div>
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default TransactionHistoryApp;
