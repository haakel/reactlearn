import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./pages/Nav";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  //e06 - 3:16:26
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile/:name?" element={<Profile />} /> */}
          <Route path="/profile/:name/:id" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
        <div>footer</div>
      </Router>
    </div>
  );
}

export default App;
