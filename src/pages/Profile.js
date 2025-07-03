import { useParams } from "react-router-dom";
const Profile = () => {
  const { name, id } = useParams();
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {name}!</p>
      <p>your id is : {id}.</p>
    </div>
  );
};
export default Profile;
