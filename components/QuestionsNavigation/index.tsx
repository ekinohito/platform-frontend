import React from 'react';
import TWRow from "../tailwind/TWRow";
import {useQuestions} from "../../context/questionsContext";
import NavigationButton from "./NavigationButton";

export default function QuestionsNavigation() {
    const {setSelected, state} = useQuestions();
    return (
        <div className="flex flex-col">
            <TWRow className="mb-6">
                <div className="flex justify-between col-start-6 col-span-2">
                    <NavigationButton
                        onClick={() => setSelected(state.selectedQuestion + 1)}
                        active={state.selectedQuestion !== 0}
                    />
                    <NavigationButton
                        onClick={() => setSelected(state.selectedQuestion - 1)}
                        active={state.selectedQuestion !== state.questions.length - 1}
                        reversed
                    />

                </div>
            </TWRow>
            <TWRow>
                <div className="col-start-4 col-span-6 h-1.5 rounded-full bg-blue-600"/>
            </TWRow>
        </div>
    )
}
