
import FriendList from './FriendList';
import friends from './friends.json';


const FriendListApp = () => {
  return (
    <div>
      <h1></h1>
      <FriendList friends={friends} />
    </div>
  );
};

export default FriendListApp;
