import React from 'react';
import TWContainer from "../components/tailwind/TWContainer";
import Question from "../components/Question";
import {QuestionsProvider} from "../context/questionsContext";

export default function Home() {
    return (
        <div className="min-h-screen">
            <TWContainer>
                <QuestionsProvider>
                    <div className="flex flex-col justify-center min-h-screen">
                        <Question/>

                    </div>
                </QuestionsProvider>
            </TWContainer>
        </div>
    )
}
