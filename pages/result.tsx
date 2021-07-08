import TWContainer from "../components/tailwind/TWContainer";
import React from "react";
import QuestionsHeader from "../components/QuestionsHeader";
import QuestionsSidebar from "../components/QuestionsSidebar";
import QuestionsNavigation from "../components/QuestionsNavigation";
import ResultShow from "../components/ResultShow";

export default function Result() {
    return <div className="min-h-screen">
        <TWContainer>
            <QuestionsHeader/>
            <div className="flex flex-col justify-center min-h-screen">
                <QuestionsSidebar/>
                <ResultShow/>
                <QuestionsNavigation/>
            </div>
        </TWContainer>
    </div>
}