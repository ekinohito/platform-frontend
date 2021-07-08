import TWContainer from "../components/tailwind/TWContainer";
import React from "react";
import QuestionsHeader from "../components/QuestionsHeader";
import QuestionsSidebar from "../components/QuestionsSidebar";
import QuestionsNavigation from "../components/QuestionsNavigation";
import ResultShow from "../components/ResultShow";
import Image from "next/image";
import icon from "../public/icons/main.svg";
import TimerComponent from "../components/QuestionsHeader/TimerComponent";
import FinishButton from "../components/Buttons/FinishButton";
import {useAppSelector} from "../store";

export default function Result() {
    const answers = useAppSelector(state => state.exam.answers)
    const score = answers?answers.reduce((previousValue, currentValue) => previousValue + (currentValue.right?1:0), 0):0
    return <div className="min-h-screen">
        <TWContainer>
            <div className="absolute top-12 left-0 px-32 flex justify-between min-w-full">
                <Image src={icon} alt="icon" width={50} height={50}/>
                {score}/25
            </div>
            <div className="flex flex-col justify-center min-h-screen">
                <QuestionsSidebar/>
                <ResultShow/>
                <QuestionsNavigation/>
            </div>
        </TWContainer>
    </div>
}