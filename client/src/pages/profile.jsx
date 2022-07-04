import { useSelector } from "react-redux";
import "./profile.css";

const Profile = () => {
  const { data } = useSelector((state) => state.user);

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="profile-dets">
        <div>
          <h2>Email: </h2>
          <h3>{data.email}</h3>
        </div>
        <div>
          <h2>Name: </h2>
          <h3>{data.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
