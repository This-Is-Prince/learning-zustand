import create, { SetState } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Course {
  id: string | number;
  completed: boolean;
}
interface CourseState {
  courses: Course[];
  addCourse: (course: Course) => void;
  removeCourse: (courseId: string | number) => void;
  toggleCourseState: (courseId: string | number) => void;
}

const courseStore = (set: SetState<CourseState>) =>
  ({
    courses: [],
    addCourse: (course) => {
      set((state) => ({
        courses: [course, ...state.courses],
      }));
    },
    removeCourse: (courseId) => {
      set((state) => ({
        courses: state.courses.filter((course) => course.id !== courseId),
      }));
    },
    toggleCourseState: (courseId) => {
      set((state) => ({
        courses: state.courses.map((course) =>
          course.id === courseId
            ? { ...course, completed: !course.completed }
            : course
        ),
      }));
    },
  } as CourseState);

const useCourseStore = create(
  devtools(persist(courseStore, { name: "courses" }))
);

export default useCourseStore;
