import Userlist from "./User";
import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Course from "./course";

function App() {
  // e03 - 1:59:17
  const [courselist, setcourselist] = useState([]);
  const [newcourse, setnewcourse] = useState("");
  const handelChange = (event) => {
    setnewcourse(event.target.value);
  };

  const addcorse = () => {
    const lastId =
      courselist.length > 0 ? courselist[courselist.length - 1].id : 0;
    const course = {
      id: lastId + 1,
      courseName: newcourse,
    };

    const newcourselist = [...courselist, course];
    setcourselist(newcourselist);
    console.log(newcourselist);
  };
  const deletecourse = (courseid) => {
    const newcourselist = courselist.filter((course) => {
      // if (course === courseName) return false;
      // else return true;
      return courseid !== course.id;
    });
    setcourselist(newcourselist);
  };
  return (
    <div className="App">
      <div className="add-course">
        <input type="text" onChange={handelChange}></input>
        <button onClick={addcorse}>add course</button>
        <pre></pre>
        {newcourse}
        <div className="list"></div>
        {courselist.map((course, index) => {
          return (
            // <div key={`div_${index}`}>
            //   <h1 key={`h1_${index}`}>{course.courseName}</h1>
            //   <button
            //     key={`bt_${index}`}
            //     onClick={() => deletecourse(course.id)}
            //   >
            //     delete
            //   </button>
            // </div>

            <Course course={course} key={index} deletecourse={deletecourse} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
