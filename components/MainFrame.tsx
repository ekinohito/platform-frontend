import React from "react";
import Stage from "../utils/Stage";
import Frame from "./Frame";
import AnswerField from "./AnswerField";

export default function MainFrame(props: {stage: Stage, index: number}) {
    const {stage, index} = props
    return <Frame>
        <h1>Question №{index + 1}</h1>
        <p>{stage.question}</p>
        <AnswerField stage={stage}/>
        <button onClick={() => stage.setDone(true)}>Submit</button>
    </Frame>
}