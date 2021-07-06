import React from 'react';
import {useQuestions} from "../../context/questionsContext";
import SidebarButton from "./SidebarButton";
import {v4} from "uuid";

export default function QuestionsSidebar() {
    const {state, setSelected} = useQuestions();
    return (
        <div className="absolute top-0 left-0 min-h-screen py-24 px-4 shadow-xl">
            <div className="flex flex-col">
                {
                    state.questions.map((question) =>
                        <SidebarButton
                            number={question.number}
                            active={state.selectedQuestion == question.number}
                            completed={question.completed}
                            onClick={() => setSelected(question.number)}
                            key={v4()}
                        />
                    )
                }
            </div>
        </div>
    )
}
