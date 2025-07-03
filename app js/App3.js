import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  const [catfact, setcatfact] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      //console.log(res.data);
      setcatfact(res.data.fact);
    });
  };
  return (
    <div className="App">
      <button onClick={fetchData}>fetch data</button>
      <p>{catfact}</p>
    </div>
  );
}

export default App;
