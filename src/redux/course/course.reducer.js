import { CourseActionTypes } from './course.types';

const INITIAL_STATE = {
    courses: []
}

const courseReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CourseActionTypes.SET_COURSES:
            return {
                ...state,
                courses: action.payload
            }
        default:
            return state;
    }
}

export default courseReducer;