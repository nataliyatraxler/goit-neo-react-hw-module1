
import Profile from './components/Profile/Profile.jsx';
import userData from './components/Profile/userData.json';

const AppProfile = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};

export default AppProfile;
