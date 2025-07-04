import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./pages/Nav";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, createContext } from "react";

export const profileContext = createContext();
function App() {
  //e07 - 3:38:18
  const [username, setUsername] = useState("hamid akbari");
  return (
    <div className="App">
      <profileContext.Provider value={{ username, setUsername }}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Home username={username} />} /> */}
            <Route path="/profile" element={<Profile />} />{" "}
            {/* <Route
              path="/profile"
              element={
                <Profile setUsername={setUsername} username={username} />
              }
            /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
          <div>footer</div>
        </Router>
      </profileContext.Provider>
    </div>
  );
}

export default App;
