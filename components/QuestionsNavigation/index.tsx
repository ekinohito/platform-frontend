import React from 'react';
import TWRow from "../tailwind/TWRow";
import {useAppDispatch, useAppSelector} from "../../store";
import {setQuestionSelected} from "../../reducers/exam";
import NavigationButton from "./NavigationButton";

export default function QuestionsNavigation() {
    const dispatch = useAppDispatch();
    const selectedQuestion = useAppSelector<number>(state => state.exam.selectedQuestion);
    const questionsLength = useAppSelector<number>(state => state.exam.questions.length);

    return (
        <div className="flex flex-col">
            <TWRow className="mb-6">
                <div className="flex justify-between col-start-6 col-span-2">
                    <NavigationButton
                        onClick={() => dispatch(setQuestionSelected(selectedQuestion - 1))}
                        active={selectedQuestion !== 1}
                    />
                    <NavigationButton
                        onClick={() => dispatch(setQuestionSelected(selectedQuestion + 1))}
                        active={selectedQuestion !== questionsLength}
                        reversed
                    />

                </div>
            </TWRow>
        </div>
    )
}
