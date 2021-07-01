import React, {Dispatch, SetStateAction} from "react";
import Stage from "../utils/Stage";
import Frame from "./Frame";
import AnswerField from "./AnswerField";
import Button from "./Button";

export default function MainFrame(props: {stage: Stage, index: number, setIndex: Dispatch<SetStateAction<number>>}) {
    const {stage, index, setIndex} = props
    return <Frame>
        <h1>Question №{index + 1}</h1>
        <p>{stage.question}</p>
        <AnswerField stage={stage}/>
        <Button onClick={() => setIndex(index - 1)} disabled={index === 0}>Previous</Button>
        <Button onClick={() => setIndex(index + 1)} done>Next</Button>
    </Frame>
}