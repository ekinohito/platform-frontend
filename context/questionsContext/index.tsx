import React, {createContext, useContext, useReducer} from 'react';
import questionReducer, {initialQuestionsState, QuestionsState} from "./reducer";
import {Question, CheckboxQuestion, TextboxQuestion} from "./types";

interface QuestionProviderValue {
    state: QuestionsState,
    setSelected: (selected: number) => void,
    setQuestions: (questions: Question[]) => void,
    setChecked: (checked: number) => void,
    setText: (text: string) => void
}

const QuestionsContext = createContext<QuestionProviderValue>(null);

const useQuestions = () => useContext(QuestionsContext);



const QuestionsProvider = ({children}) => {
    const [state, dispatch] = useReducer(questionReducer, initialQuestionsState);

    return (
        <QuestionsContext.Provider value={{
            state,
            setSelected: (selected) => dispatch({type: "SET_SELECTED", payload: selected}),
            setQuestions: (questions) => dispatch({type: "SET_QUESTIONS", payload: questions}),
            setChecked: (checked) => dispatch({type: "SET_CHECKED", payload: checked}),
            setText: (text) => dispatch({type: "SET_TEXT", payload: text})
        }
        }>
            {children}
        </QuestionsContext.Provider>
    )
}

export {QuestionsProvider, useQuestions};
export type {Question, CheckboxQuestion, TextboxQuestion}
