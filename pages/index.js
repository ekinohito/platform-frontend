import React from 'react';
import TWContainer from "../components/tailwind/TWContainer";
import Question from "../components/Question";
import QuestionsNavigation from "../components/QuestionsNavigation";
import QuestionsSidebar from "../components/QuestionsSidebar";
import QuestionsHeader from "../components/QuestionsHeader";

export default function Home() {
    return (
        <div className="min-h-screen">
            <TWContainer>
                <QuestionsHeader/>
                <div className="flex flex-col justify-center min-h-screen">
                    <QuestionsSidebar/>
                    <Question/>
                    <QuestionsNavigation/>
                </div>
            </TWContainer>
        </div>
    )
}
