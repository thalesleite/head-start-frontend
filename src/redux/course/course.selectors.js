import { createSelector } from 'reselect';

const getCourses = state => state.courses;

export const selectCourses = createSelector(
    [getCourses],
    (courses) => courses.courses
);