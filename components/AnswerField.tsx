import React, {useState} from "react";
import Stage from "../utils/Stage";
import {TextboxStage} from "../utils/TextboxStage";
import {CheckboxStage} from "../utils/CheckboxStage";
import styles from "../styles/AnswerField.module.css";

export default function AnswerField(props: {stage: Stage}) {
    const {stage} = props
    switch (true) {
        case stage instanceof TextboxStage:
            const textbox = stage as TextboxStage
            return <div>
                <textarea placeholder={textbox.hint}
                             value={textbox.text}
                             onChange={event => textbox.setText(event.target.value)}/>
            </div>
        case stage instanceof CheckboxStage:
            const checkbox = stage as CheckboxStage
            return <div>
                    {checkbox.variants.map((value, index) =>
                        <div key={index}
                             onClick={() => checkbox.setSelected(index)}
                             className={`${styles.variant} ${index==checkbox.selected?styles.selected:''}`}>
                            <span/>{value}
                        </div>
                    )}
                </div>
        case true:
            throw "Not implemented"
    }
}