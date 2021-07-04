import React from 'react';
import TWContainer from "../components/tailwind/TWContainer";
import Question from "../components/Question";
import {QuestionsProvider} from "../context/questionsContext";
import QuestionsNavigation from "../components/QuestionsNavigation";

export default function Home() {
    return (
        <div className="min-h-screen">
            <TWContainer>
                <QuestionsProvider>
                    <div className="flex flex-col justify-center min-h-screen">
                        <Question/>
                        <QuestionsNavigation/>
                    </div>
                </QuestionsProvider>
            </TWContainer>
        </div>
    )
}
