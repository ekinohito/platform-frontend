import {VariantQuestion, Question, TextQuestion} from "../../types/question";

interface QuestionsState {
    selectedQuestion: number,
    questions: Question[]
}

const initialQuestionsState: QuestionsState = {
    selectedQuestion: 1,
    questions: [
        {
            number: 1,
            question: 'В одном из приведённых ниже слов допущена ошибка в' +
                ' постановке ударения: НЕВЕРНО выделена буква, обозначающая ударный гласный звук. Выберете это слово.',
            done: false,
            type: 'variant',
            variants: ['подОшва', 'избАлованный', 'непрАвы', 'дозвонИмся', 'оглянЁмся'],
            completed: false
        },
        {
            number: 2,
            question: 'В одном из приведённых ниже слов допущена ошибка в' +
                ' постановке ударения: НЕВЕРНО выделена буква, обозначающая ударный гласный звук. Выберете это слово.',
            done: false,
            type: 'variant',
            variants: ['подОшва', 'избАлованный', 'непрАвы', 'дозвонИмся', 'оглянЁмся'],
            completed: false
        },
        {
            number: 3,
            question: 'В одном из приведённых ниже слов допущена ошибка в' +
                ' постановке ударения: НЕВЕРНО выделена буква, обозначающая ударный гласный звук. Выберете это слово.',
            done: false,
            type: 'variant',
            variants: ['подОшва', 'избАлованный', 'непрАвы', 'дозвонИмся', 'оглянЁмся'],
            completed: false
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
        case "SET_CHECKED": {
            const newState = Object.assign({}, state);

            (newState.questions[newState.selectedQuestion-1] as VariantQuestion).checked = action.payload;
            (newState.questions[newState.selectedQuestion-1] as VariantQuestion).completed = true;
            return newState;
        }
        case "SET_TEXT": {
            const newState = Object.assign({}, state);
            (state.questions[state.selectedQuestion-1] as TextQuestion).answer = action.payload;
            return state;
        }
        default:
            return state;
    }
}

export default questionReducer;
export {initialQuestionsState};
export type {QuestionsAction, QuestionsState}
