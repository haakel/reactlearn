import { useContext, useState } from "react";
import { profileContext } from "../../App"; // Adjust the import path as necessary

const ChangeProfile = () => {
  //e07 - 3:38:18
  const { setUsername } = useContext(profileContext);
  const [newUsername, setNewUsername] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
        type="text"
        placeholder="Enter new username"
      />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
export default ChangeProfile;
