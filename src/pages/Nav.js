//e06 - 3:16:26
// import { Link } from "react-router-dom";
// const Nav = () => {
//   return (
//     <div className="navbar">
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
//         <Link to="/contact">Contact</Link> |{" "}
//         <Link to="/profile/hamid/1">Profile</Link>
//       </nav>
//     </div>
//   );
// };
// export default Nav;

//e07 - 3:38:18
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> | <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
};
export default Nav;
