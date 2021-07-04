import React from 'react';
import {Question, VariantQuestion} from "../../types/question";
import {useQuestions} from "../../context/questionsContext";
import QuestionVariant from "./QuestionVariant";

export default function QuestionInput({question}: {question: Question}) {
    const {setChecked} = useQuestions();

    if (question.type == "variant") {
        const variant = question as VariantQuestion;
        return (
            <div className="flex flex-col">
                {
                    variant.variants.map((vrt, index) =>
                        <QuestionVariant
                            checked={index == variant.checked}
                            answer={vrt}
                            onChange={(e) => setChecked(index)}
                            key={index}
                        />
                    )
                }
            </div>
        )
    }

    return null;
}
