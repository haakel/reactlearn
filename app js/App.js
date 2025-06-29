import Userlist from "./User";
import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  //ep 1 00:48:36
  const check = "hamid";
  const check1 = <h1>test</h1>;
  const check2 = (
    <div>
      <h1>test1</h1>
      <h1>test2</h1>
    </div>
  );
  // اضافه کردن شرط

  const age = 30;
  if (age > 20) console.log("over age");
  else console.log("under age");
  age > 20 ? console.log("over age") : console.log("under age");

  const names = ["sarvin", "hamid", "mamad"];
  const list = [
    { name: "sarvin", age: 43 },
    { name: "hamid", age: 25 },
    { name: "mamad", age: 24 },
  ];
  const list2 = [
    { name: "hamid", age: 50 },
    { name: "hamid", age: 40 },
    { name: "mamad", age: 30 },
  ];
  //filter , forech , map,....
  // تست مپ مراجعه

  // state
  // var age1 = 0;
  const [age1, setAge1] = useState(0);
  const incAge = () => {
    setAge1(age1 + 1);
  };
  const [inputeV, setInPuteV] = useState("");
  const handelInputchange = (event) => {
    // console.log(event);
    // console.log(event.target.value);
    setInPuteV(event.target.value);
  };
  const [showtext, setshowtext] = useState(true);
  const toggletext = (event) => {
    setshowtext(!showtext);
  };
  const [textcolor, settextcolor] = useState("red");

  return (
    <div className="App">
      <div>hi</div>
      <div className="style-check">{check}</div>
      <div style={{ color: "red", fontSize: "30px" }}>{check1}</div>
      {check1}
      {check2}
      <Getnamecomponnet name={check} age={23} tel="01993938735" />
      <Getnamecomponnet name={check} age={23} tel="01993938735" />
      {age > 11 ? <h1>over</h1> : <h1>under</h1>}
      {age === age && <h1>age is {age}</h1>}
      <h1>{names[0]}</h1>
      {/* تست مپ */}
      {names.map((names, index) => {
        return <h1 key={index}>{names}</h1>;
      })}
      {list.map((list, index) => {
        return (
          <h1 key={index}>
            {list.name}: {list.age}
          </h1>
        );
      })}
      {list2.map((list2, index) => {
        return <Userlist key={index} name={list2.name} age={list2.age} />;
      })}
      {/*state*/}
      <h1>{age1}</h1>
      {/* <button onClick={incAge}>inc.. age</button> */}
      <button onClick={() => setAge1(age1 + 1)}>inc.. age</button>
      <button onClick={() => setAge1(age1 - 1)}>dec.. age</button>
      <pre>
        <input type="text" onChange={handelInputchange}></input>
        <h1>{inputeV}</h1>
      </pre>
      <button onClick={toggletext}>dande</button>
      {showtext && <h1>hamid dande dande</h1>}
      {/* ep 2 01:25:55 */}

      <button
        onClick={() => {
          settextcolor(textcolor === "red" ? "green" : "red");
        }}
      >
        dande2
      </button>
      <h1 style={{ color: textcolor }}>dande dande</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//FUNCTION
const Getname = () => {
  return "hamid";
};

//props
// const props = {
//   name: "test",
//   age: 23,
//   tel: "09193938735",
// };

//COMPONNET
const Getnamecomponnet = (props) => {
  // خطا زیر غلطه  مفدار پراپس فایل تغییر نیست
  // {props.name} = "hassan";
  return <h1> {props.name} COMPONNET</h1>;
};

export default App;
