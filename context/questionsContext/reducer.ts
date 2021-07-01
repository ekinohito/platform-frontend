import {CheckboxQuestion, Question, TextboxQuestion} from "./types";

interface QuestionsState {
    selectedQuestion: number,
    questions: Question[]
}

const initialQuestionsState: QuestionsState = {
    selectedQuestion: 0,
    questions: null
}

type QuestionsAction =
    | {type: "SET_QUESTIONS", payload: Question[]}
    | {type: "SET_SELECTED", payload: number}
    | {type: "SET_CHECKED", payload: number}
    | {type: "SET_TEXT", payload: string}

const questionReducer = (state: QuestionsState=initialQuestionsState, action: QuestionsAction): QuestionsState => {
    switch (action.type) {
        case "SET_QUESTIONS":
            return {
                ...state, questions: action.payload
            }
        case "SET_SELECTED":
            return {
                ...state, selectedQuestion: action.payload
            }
        case "SET_CHECKED":
            (state.questions[state.selectedQuestion] as CheckboxQuestion).checked = action.payload;
            return state;
        case "SET_TEXT":
            (state.questions[state.selectedQuestion] as TextboxQuestion).answer = action.payload;
            return state;
        default:
            return state;
    }
}

export default questionReducer;
export {initialQuestionsState};
export type {QuestionsAction, QuestionsState}
