// e03 - 1:59:17
const Course = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.course.iscompleted ? "green" : "white",
      }}
    >
      <h1>{props.course.courseName}</h1>
      <button onClick={() => props.deletecourse(props.course.id)}>
        delete
      </button>
      <button onClick={() => props.completecourse(props.course.id)}>
        complete
      </button>
    </div>
  );
};
export default Course;
