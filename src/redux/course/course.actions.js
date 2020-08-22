import { CourseActionTypes } from './course.types';

export const setCourses = courses => ({
    type: CourseActionTypes.SET_COURSES,
    payload: courses
});