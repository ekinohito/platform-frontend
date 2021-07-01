import React, {Dispatch, SetStateAction} from "react";
import Stage from "../utils/Stage";
import Frame from "./Frame";
import AnswerField from "./AnswerField";
import Button from "./Button";
import styles from "../styles/MainFrame.module.css"

export default function MainFrame(props: {stage: Stage, index: number, setIndex: Dispatch<SetStateAction<number>>}) {
    const {stage, index, setIndex} = props
    return <Frame>
        <h3 className={styles.header}>Question №{index + 1}</h3>
        <p className={styles.question}>{stage.question}</p>
        <AnswerField stage={stage}/>
        <div className={styles.buttons}>
            <Button onClick={() => setIndex(index - 1)} disabled={index === 0}>Previous</Button>
            <Button onClick={() => setIndex(index + 1)} done>Next</Button>
        </div>
    </Frame>
}