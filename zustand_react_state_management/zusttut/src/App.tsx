import CourseForm from "./components/CourseForm";

const App = () => {
  return (
    <div className="main-container">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
        My Course list
      </h1>
      <CourseForm />
    </div>
  );
};

export default App;
