//e06 - 3:16:26
// import { useParams } from "react-router-dom";
// const Profile = () => {
//   const { name, id } = useParams();
//   return (
//     <div>
//       <h1>Profile Page</h1>
//       <p>Welcome, {name}!</p>
//     </div>
//   );
// };
// export default Profile;

import { useContext } from "react";
import ChangeProfile from "./Components/ChangePrpfile";
import { profileContext } from "../App";
//e06 - 3:20:00
// const Profile = (props) => {
//   return (
//     <div>
//       <h1>Profile Page</h1>
//       <p>Welcome, username : {props.username}!</p>
//       <ChangeProfile setUsername={props.setUsername} />
//     </div>
//   );
// };
// export default Profile;
//e07 - 3:38:18
const Profile = () => {
  const { username } = useContext(profileContext);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, username : {username}!</p>
      <ChangeProfile />
    </div>
  );
};
export default Profile;
