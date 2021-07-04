import React from 'react';
import {Question as TQuestion} from "../../types/question";
import TWRow from "../tailwind/TWRow";
import {useQuestions} from "../../context/questionsContext";
import QuestionInput from "./QuestionInput";

export default function Question() {
    const {state} = useQuestions();
    const question = state?.questions[state.selectedQuestion];

    return (
        question
            ?
            <TWRow>
                <div className="flex flex-col col-start-3 col-span-8 mb-6">
                    <span className="text-blue-600 text-3xl mb-4 font-sans font-medium">
                        Задание {question.number}
                    </span>
                    <div className="text-black text-2xl font-mono mb-4">
                        {question.question}
                    </div>
                    <QuestionInput question={question}/>
                </div>
            </TWRow>
            :
            <div/>
    )
}
