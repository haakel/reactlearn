import logo from "./logo.svg";
import "./App.css";

function App() {
  const check = "hamid";
  const check1 = <h1>test</h1>;
  const check2 = (
    <div>
      <h1>test1</h1>
      <h1>test2</h1>
    </div>
  );
  // اضافه کردن شرط
  //ep 1 00:48:36
  const age = 30;
  if (age > 20) console.log("over age");
  else console.log("under age");
  age > 20 ? console.log("over age") : console.log("under age");

  return (
    <div className="App">
      <div>hi</div>
      <div className="style-check">{check}</div>
      <div style={{ color: "red", fontSize: "30px" }}>{check1}</div>
      {check1}
      {check2}
      <Getnamecomponnet name={check} age={23} tel="01993938735" />
      <Getnamecomponnet name={check} age={23} tel="01993938735" />
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
