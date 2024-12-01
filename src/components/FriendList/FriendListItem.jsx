
import PropTypes from 'prop-types';
import './FriendListItem.css'; 

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-item">
      <img src={avatar} alt={name} width="48" className="avatar" />
      <p className="name">{name}</p>
      <p className={`status ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
