import expect from "expect";
import { createStore } from "redux";
import rootReducer from "../reducers";
import initialState from "../reducers/initialState";
import * as courseActions from "../actions/courseActions";

describe('Store', () => {
    it('Should handle creating courses', () => {
        // arrange
        const store = createStore(rootReducer, initialState);
        const course = { title: 'A' };

        // act 
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        // arrange
        const actual = store.getState().courses[0];

        expect(actual.title).toEqual(course.title);
    });
});