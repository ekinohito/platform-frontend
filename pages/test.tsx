import React, {useEffect, useState} from "react";
import Button from "../components/Button";
import {TextboxStage} from "../utils/TextboxStage";
import {CheckboxStage} from "../utils/CheckboxStage";
import MainFrame from "../components/MainFrame";
import styles from "../styles/Test.module.css"
import TimerComponent from "../components/TimerComponent";

export default function Test() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const setAndUpdateIndex = (index: number) => {
        stages[selectedIndex].setDone(stages[selectedIndex].isFilled);
        setSelectedIndex(index)

    }
    const sendAnswers = () => {
        alert('answers sent!')
    }
    const [time, setTime] = useState(0)
    useEffect(() => {
        const start = Date.now()
        const timer =  setInterval(() => setTime(Date.now() - start), 1000)
        return () => clearInterval(timer)
    }, [])
    const stages = [
        new CheckboxStage('В одном из приведённых ниже слов ' +
            'допущена ошибка в постановке ударения: НЕВЕРНО выделена буква, ' +
            'обозначающая ударный гласный звук. Выберете это слово.?',
            ['подОшва', 'избалОванный', 'непрАвы', 'дозвонИмся', 'оглянЁтся']),
        new TextboxStage('Задание с ответом в виде текста', 'Впишите что-нибудь'),
        new CheckboxStage('why?', ['because', 'because(2)', 'because(3)']),
        new CheckboxStage('why?', ['because', 'because(2)', 'because(3)']),
        new CheckboxStage('why?', ['because', 'because(2)', 'because(3)'])
    ]
    const allDone = stages.reduce((previousValue, currentValue) => previousValue && currentValue.isFilled, true)
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <TimerComponent time={time}/>
            <div className={styles.button_row}>
                {stages.map((value, index) =>
                    <Button
                        key={index}
                        onClick={() => setAndUpdateIndex(index)}
                        circle
                        selected={index === selectedIndex}
                        done={value.done}>
                        {index + 1}
                    </Button>
                )}
                <Button
                    onClick={sendAnswers}
                    selected={-1 === selectedIndex}
                    done style={{display: allDone? "inline-block" : "none"}}>
                    Отправить
                </Button>
            </div>
            <MainFrame stage={stages[selectedIndex]}
                       index={selectedIndex}
                       setIndex={setAndUpdateIndex}
                       isLast={selectedIndex===stages.length - 1}
                       allDone={allDone}
                       sendAnswers={sendAnswers}/>
        </div>
    </div>
}