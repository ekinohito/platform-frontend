import React from 'react';
import {QuestionsAction} from "./reducer";
import {Question} from "../../types/question";

export function setQuestions(dispatch: React.Dispatch<QuestionsAction>, questions: Question[]) {
    dispatch({type: "SET_QUESTIONS", payload: questions})
}

export function setSelected(dispatch: React.Dispatch<QuestionsAction>, selected: number) {
    dispatch({type: "SET_SELECTED", payload: selected})
}

export function setChecked(dispatch: React.Dispatch<QuestionsAction>, checked: number) {
    dispatch({type: "SET_CHECKED", payload: checked})
}

export function setText(dispatch: React.Dispatch<QuestionsAction>, text: string) {
    dispatch({type: "SET_TEXT", payload: text})
}
