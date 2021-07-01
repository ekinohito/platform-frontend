import React, {Dispatch, SetStateAction} from "react";
import Stage from "../utils/Stage";
import Frame from "./Frame";
import AnswerField from "./AnswerField";
import Button from "./Button";
import styles from "../styles/MainFrame.module.css"

export default function MainFrame(props: {stage: Stage, index: number,
    setIndex: Dispatch<SetStateAction<number>>, isLast: boolean}) {
    const {stage, index, setIndex, isLast} = props
    return <Frame>
        <h3 className={styles.header}>Задание {index + 1}</h3>
        <p className={styles.question}>{stage.question}</p>
        <AnswerField stage={stage}/>
        <div className={styles.buttons}>
            <Button onClick={() => setIndex(index - 1)} disabled={index === 0}>Назад</Button>
            <Button onClick={() => setIndex(index + 1)} disabled={isLast} done>Далее</Button>
        </div>
    </Frame>
}