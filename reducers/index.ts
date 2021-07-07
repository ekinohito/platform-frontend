import {combineReducers} from "redux";
import {ExamState, reducer as exam} from './exam';

const reducer = combineReducers({
    exam
})

export default reducer;

export type RootState = {
    exam: ExamState
}
