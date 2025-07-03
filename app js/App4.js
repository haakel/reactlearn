import axios from "axios";
import "./App.css";
import { useState } from "react";
function App() {
  //e05-2:52:18
  const [resalt, setresalt] = useState({});
  const [name, setName] = useState("");
  const fetchage = () => {
    axios.get(`https://api.agify.io?name=${name}`).then((res) => {
      console.log(res.data);
      setresalt(res.data);
    });
  };
  return (
    <div className="App">
      <input
        placeholder="Enter your name"
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={fetchage}>predict age</button>
      <h1>age is : {resalt?.age}</h1>
      <h1>name is : {resalt?.name}</h1>
    </div>
  );
}

export default App;
