import TWContainer from "../components/tailwind/TWContainer";
import React, {useState} from "react";
import {setQuestions, setToken} from "../reducers/exam";
import {useRouter} from "next/router";
import NormalButton from "../components/Buttons/NormalButton";
import {useDispatch} from "react-redux";
import {Question} from "../types/exam";

export default function Result() {
    const [text, setText] = useState('')
    const router = useRouter()
    const dispatch = useDispatch()
    return <div className="min-h-screen">
        <TWContainer>
            <div className="flex flex-col justify-center min-h-screen mx-5">
                Пожалуйста, введите персональный токен:
                <div className="flex flex-row w-full justify-between flex-wrap my-4">
                    <input className="border-b-2 border-blue-dark w-full sm:w-1/2" onChange={event => setText(event.target.value)}/>
                    <NormalButton onClick={async () => {
                        const login = await fetch(process.env.NEXT_PUBLIC_BACKEND_SERVER + '/api/login', {
                            method: "POST",
                            body: JSON.stringify({
                                token: text
                            })
                        })
                        const exam = await fetch(process.env.NEXT_PUBLIC_BACKEND_SERVER + '/api/exam', {
                            method: "POST",
                            body: JSON.stringify({
                                token: text
                            })
                        })
                        if (!login.ok || !exam.ok) return
                        dispatch(setToken(text))
                        const data: {number: number, quest: string, answers: string[]}[] = (await exam.json()).task
                        const questions: Question[] = data.map((value, index) => ({
                            type: "variant",
                            number: index + 1,
                            question: value.quest,
                            variants: value.answers,
                            answer: undefined
                        }))
                        dispatch(setQuestions(questions))
                        await router.push('/')
                    }}>Ввести токен</NormalButton>
                </div>
            </div>
        </TWContainer>
    </div>
}