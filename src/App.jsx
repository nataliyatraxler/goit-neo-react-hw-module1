import Profile from './components/Profile/Profile.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import userData from './components/Profile/userData.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionsHistory/transactions.json';

const App = () => {
  return (
    <div>
      {/* Компонент профілю */}
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      {/* Список друзів */}
      <FriendList friends={friends} />

      {/* Історія транзакцій */}
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
