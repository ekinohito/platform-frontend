import React from 'react';
import {Question, VariantQuestion} from "../../types/question";
import {useQuestions} from "../../context/questionsContext";
import QuestionVariant from "./QuestionVariant";
import {v4} from 'uuid';

export default function QuestionInput({question}: {question: Question}) {
    const {setChecked} = useQuestions();

    if (question.type == "variant") {
        const variant = question as VariantQuestion;
        return (
            <div className="flex flex-col">
                {
                    variant.variants.map((vrt, index) =>
                        <QuestionVariant
                            checked={index === variant.checked}
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
