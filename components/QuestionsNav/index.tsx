import React from 'react';
import {useQuestions} from "../../context/questionsContext";

import QuestionButton from "./QuestionButton";

export default function QuestionsNav() {
    const {state, setSelected} = useQuestions();

    return (
        <div className="flex">
            {state.questions.map((question, index) =>
                <QuestionButton
                    key={index}
                    index={index}
                    active={index==state.selectedQuestion}
                    done={question.done}
                />
            )}
        </div>
    )
}
