import React from 'react';
import {Question} from "../../types/question";
import {useQuestions} from "../../context/questionsContext";
import QuestionVariant from "./QuestionVariant";
import {v4} from 'uuid';

export default function QuestionInput({question}: {question: Question}) {
    const {setChecked} = useQuestions();

    if (question.type == "variant") {
        return (
            <div className="flex flex-col">
                {
                    question.variants.map((vrt, index) =>
                        <QuestionVariant
                            checked={index === question.checked}
                            answer={vrt}
                            onClick={() => setChecked(index)}
                            key={v4()}
                        />
                    )
                }
            </div>
        )
    }

    return null;
}
