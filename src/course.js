// e03 - 1:59:17
const Course = (props) => {
  return (
    <div>
      <h1>{props.course.courseName}</h1>
      <button onClick={() => props.deletecourse(props.course.id)}>
        delete
      </button>
    </div>
  );
};
export default Course;
