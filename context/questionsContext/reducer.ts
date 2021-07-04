import {VariantQuestion, Question, TextQuestion} from "../../types/question";

interface QuestionsState {
    selectedQuestion: number,
    questions: Question[]
}

const initialQuestionsState: QuestionsState = {
    selectedQuestion: 0,
    questions: [
        {
            number: 1,
            question: 'В одном из приведённых ниже слов допущена ошибка в' +
                ' постановке ударения: НЕВЕРНО выделена буква, обозначающая ударный гласный звук. Выберете это слово.',
            done: false,
            type: 'variant',
            variants: ['подОшва', 'избАлованный', 'непрАвы', 'дозвонИмся', 'оглянЁмся'],

        }
    ]
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
            (state.questions[state.selectedQuestion] as VariantQuestion).checked = action.payload;
            return state;
        case "SET_TEXT":
            (state.questions[state.selectedQuestion] as TextQuestion).answer = action.payload;
            return state;
        default:
            return state;
    }
}

export default questionReducer;
export {initialQuestionsState};
export type {QuestionsAction, QuestionsState}
