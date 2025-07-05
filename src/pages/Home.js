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
// import { useContext } from "react";
// import { profileContext } from "../App";
// const Home = () => {
//   const { username } = useContext(profileContext);
//   return (
//     <div>
//       <h1>Welcome to the Home Page username : {username}</h1>
//       <p>This is the home page of our application.</p>
//     </div>
//   );
// };
// export default Home;

import { useContext } from "react";
import { profileContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
//e08 - 3:56:42S
const Home = () => {
  const { username } = useContext(profileContext);

  const {
    data: catdata,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Welcome to the Home Page username: {username}</h1>
      <p>This is the home page of our application.</p>
      <p>fact: {catdata.fact}</p>
      <button onClick={refetch}>Fetch New Cat Fact</button>
    </div>
  );
};

export default Home;
