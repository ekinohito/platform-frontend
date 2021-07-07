import TWContainer from "../components/tailwind/TWContainer";
import React, {useState} from "react";
import {setToken} from "../reducers/exam";
import {useRouter} from "next/router";
import NormalButton from "../components/Buttons/NormalButton";

export default function Result() {
    const [text, setText] = useState('')
    const router = useRouter()
    return <div className="min-h-screen">
        <TWContainer>
            <div className="flex flex-col justify-center min-h-screen mx-5">
                Пожалуйста, введите персональный токен:
                <div className="flex flex-row w-full justify-between flex-wrap my-4">
                    <input className="border-b-2 border-blue-dark w-full sm:w-1/2" onChange={event => setText(event.target.value)}/>
                    <NormalButton onClick={() => { setToken(text); router.push('/').then() }}>Ввести токен</NormalButton>
                </div>
            </div>
        </TWContainer>
    </div>
}