import React from 'react';
import SidebarButton from "./SidebarButton";
import {v4} from "uuid";
import {useSelector} from "react-redux";
import {Question} from "../../types/exam";
import {useAppSelector, useAppDispatch} from "../../store";
import {setQuestionSelected} from "../../reducers/exam";

export default function QuestionsSidebar() {
    const questions = useAppSelector<Question[]>(state => state.exam.questions);
    const selectedQuestion = useAppSelector<number>(state => state.exam.selectedQuestion);
    const dispatch = useAppDispatch();
    return (
        <div
            className="absolute top-0 left-0 min-h-screen py-24 px-4 flex flex-col justify-center"
            style={{maxWidth: 200}}
        >
            <div className="flex flex-wrap">
                {
                    questions.map((question) =>
                        <SidebarButton
                            number={question.number}
                            active={selectedQuestion == question.number}
                            completed={!!question.answer || question.answer == 0}
                            onClick={() => dispatch(setQuestionSelected(question.number))}
                            key={v4()}
                        />
                    )
                }
            </div>
        </div>
    )
}
