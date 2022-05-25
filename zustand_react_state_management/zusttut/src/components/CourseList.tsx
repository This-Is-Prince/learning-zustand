import { Fragment } from "react";
import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseState } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseState: state.toggleCourseState,
    })
  );
  return (
    <>
      <ul>
        {courses.map(({ id, completed, title }) => {
          return (
            <Fragment key={id}>
              <li
                className={`course-item`}
                style={{ backgroundColor: completed ? "#00FF0044" : "gray" }}
              >
                <span className="course-item-col-1">
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => {
                      toggleCourseState(id);
                    }}
                  />
                </span>
                <span>{title}</span>
                <button
                  onClick={() => {
                    removeCourse(id);
                  }}
                  className="delete btn"
                >
                  Delete
                </button>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
