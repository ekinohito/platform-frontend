import React from 'react';
import TWRow from "../tailwind/TWRow";
import QuestionInput from "../Question/QuestionInput";
import {useAppSelector} from "../../store";
import {Question as TypeQuestion} from "../../types/exam";


export default function ResultShow() {
    const question = useAppSelector<TypeQuestion>(state => state.exam.questions[state.exam.selectedQuestion-1]);
    const answer = useAppSelector(state => state.exam.answers?.[state.exam.selectedQuestion-1])
    return (
        question
            ?
            <TWRow>
                <div className="flex flex-col col-start-3 col-span-8 mb-6">
                    <span className="text-blue-primary text-3xl mb-4 font-sans font-bold">
                        Задание {question.number} {answer?.right?'Правильно':'Неправильно'}
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
