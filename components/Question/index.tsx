import React from 'react';
import TWRow from "../tailwind/TWRow";
import QuestionInput from "./QuestionInput";
import {useAppSelector} from "../../store";
import {Question as TypeQuestion} from "../../types/exam";


export default function Question() {
    const question = useAppSelector<TypeQuestion>(state => state.exam.questions[state.exam.selectedQuestion-1]);

    return (
        question
            ?
            <TWRow>
                <div className="flex flex-col col-start-3 col-span-8 mb-6">
                    <span className="text-blue-600 text-3xl mb-4 font-sans font-bold">
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
