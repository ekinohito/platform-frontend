import {createAction, createSlice} from "@reduxjs/toolkit";
import {Question} from "../types/exam";

export const setQuestionsType = createAction<'test' | 'text'>('SET_QUESTIONS_TYPE');
export const setQuestions = createAction<Question[]>('SET_QUESTIONS');
export const setQuestionSelected = createAction<number>('SET_QUESTION_SELECTED');
export const setAnswer = createAction<string | number>('SET_ANSWER');

export interface ExamState {
    questionsType: 'test' | 'text',
    selectedQuestion: number,
    questions: Question[]
}

const initialState: ExamState = {
    questionsType: 'test',
    selectedQuestion: 1,
    questions: [
        {
            number: 1,
            question: 'В одном из приведённых ниже слов допущена ошибка в' +
                ' постановке ударения: НЕВЕРНО выделена буква, обозначающая ударный гласный звук. Выберете это слово.',
            done: false,
            type: 'variant',
            variants: ['подОшва', 'избАлованный', 'непрАвы', 'дозвонИмся', 'оглянЁмся'],
            answer: undefined
        },
        {
            number: 2,
            question: 'В одном из приведённых ниже слов допущена ошибка в' +
                ' постановке ударения: НЕВЕРНО выделена буква, обозначающая ударный гласный звук. Выберете это слово.',
            done: false,
            type: 'variant',
            variants: ['подОшва', 'избАлованный', 'непрАвы', 'дозвонИмся', 'оглянЁмся'],
            answer: undefined
        },
        {
            number: 3,
            question: 'В одном из приведённых ниже слов допущена ошибка в' +
                ' постановке ударения: НЕВЕРНО выделена буква, обозначающая ударный гласный звук. Выберете это слово.',
            done: false,
            type: 'variant',
            variants: ['подОшва', 'избАлованный', 'непрАвы', 'дозвонИмся', 'оглянЁмся'],
            answer: undefined
        },
        {
            number: 4,
            question: 'В одном из приведённых ниже слов допущена ошибка в' +
                ' постановке ударения: НЕВЕРНО выделена буква, обозначающая ударный гласный звук. Выберете это слово.',
            done: false,
            type: 'variant',
            variants: ['подОшва', 'избАлованный', 'непрАвы', 'дозвонИмся', 'оглянЁмся'],
            answer: undefined
        },

    ]
}

const exam = createSlice({
    name: 'exam',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(setQuestionsType, (state, action) => {
                state.questionsType = action.payload;
            })
            .addCase(setQuestions, (state, action) => {
                state.questions = action.payload;
            })
            .addCase(setQuestionSelected, (state, action) => {
                state.selectedQuestion = action.payload
            })
            .addCase(setAnswer, (state, action) => {
                state.questions[state.selectedQuestion-1].answer = action.payload;
            })
    }
})

export const { reducer } = exam;
