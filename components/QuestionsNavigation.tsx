import React from 'react';
import TWRow from "./tailwind/TWRow";
import {useQuestions} from "../context/questionsContext";

export default function QuestionsNavigation() {
    const {setSelected, state} = useQuestions();
    return (
        <div className="flex flex-col">
            <TWRow className="mb-6">
                <div className="flex justify-between col-start-6 col-span-2">
                    <button onClick={() => setSelected(state.selectedQuestion + 1)}>
                        <svg width="20" height="40" viewBox="0 0 33 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M33 4.16416L8.21081 28.9533L32.8825 53.625L28.8358 57.6717L3.8147e-06 28.8358L28.8358 0L33 4.16416Z" fill="#0A63FF"/>
                        </svg>
                    </button>
                    <button onClick={() => setSelected(state.selectedQuestion - 1)}>
                        <svg width="20" height="40" viewBox="0 0 33 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 4.16416L24.7892 28.9533L0.117509 53.625L4.16416 57.6717L33 28.8358L4.16416 0L0 4.16416Z" fill="#0A63FF"/>
                        </svg>
                    </button>

                </div>
            </TWRow>
            <TWRow>
                <div className="col-start-4 col-span-6 h-1.5 rounded-full bg-blue-500"/>
            </TWRow>
        </div>
    )
}
