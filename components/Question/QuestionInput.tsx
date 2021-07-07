import React from 'react';
import QuestionVariant from "./QuestionVariant";
import {v4} from 'uuid';
import {setAnswer} from "../../reducers/exam";
import {useAppDispatch} from "../../store";
import {Question} from "../../types/exam";

export default function QuestionInput({question}: {question: Question}) {
    const dispatch = useAppDispatch();

    if (question.type == "variant") {

        return (
            <div className="flex flex-col items-start">
                {
                    question.variants.map((vrt, index) =>
                        <QuestionVariant
                            checked={index === question.answer}
                            answer={vrt}
                            onClick={() => dispatch(setAnswer(index))}
                            key={v4()}
                        />
                    )
                }
            </div>
        )
    } else if (question.type == "text") {

    }

    return null;
}
