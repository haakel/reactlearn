import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./pages/Nav";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const profileContext = createContext();
function App() {
  //e08 - 3:56:42
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
      mutations: {},
    },
  });
  const [username, setUsername] = useState("hamid akbari");
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <profileContext.Provider value={{ username, setUsername }}>
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />{" "}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
            <div>footer</div>
          </Router>
        </profileContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
