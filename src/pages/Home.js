//e06 - 3:16:26
// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <p>This is the home page of our application.</p>
//     </div>
//   );
// };
// export default Home;

//e06 - 3:20:00
// const Home = (props) => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page username : {props.username}</h1>
//       <p>This is the home page of our application.</p>
//     </div>
//   );
// };
// export default Home;
//e07 - 3:38:18
import { useContext } from "react";
import { profileContext } from "../App";
const Home = () => {
  const { username } = useContext(profileContext);
  return (
    <div>
      <h1>Welcome to the Home Page username : {username}</h1>
      <p>This is the home page of our application.</p>
    </div>
  );
};
export default Home;
