import expect from "expect";
import * as courseActions from "../actions/courseActions";
import * as types from "../actions/actionTypes";
import courseReducer from "./courseReducer";

describe("Course Reducer", () => {
    it('should return a new course list', () => {
        // arrange 
        const courses = [
            {id: "react-flux-building-applications"},
            {id: "clean-code"}
        ]
        // act 
        const newState = courseReducer([], courseActions.loadCoursesSuccess(courses));

        // assert
        expect(newState).toEqual(courses);
        expect(newState.length).toEqual(2);
        expect(newState[0].id).toEqual('react-flux-building-applications');
    });
    it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
        //arrange
        const courses = [
            {id:'A', title:'A'},
            {id:'B', title:'B'}
        ];

        const course = {id:'A', title:'New Title'};
        const action = courseActions.updateCourseSuccess(course);

        //act
        const newState = courseReducer(courses, action);
        const updatedCourse = newState.find(a => a.id == course.id);
        const untouchedCourse = newState.find(b => b.id == 'B');

        //assert
        expect(updatedCourse.title).toEqual('New Title');
        expect(untouchedCourse.title).toEqual('B');
        expect(newState.length).toEqual(2);
    });
});