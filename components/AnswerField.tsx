import React from "react";
import Stage from "../utils/Stage";
import {TextboxStage} from "../utils/TextboxStage";
import {CheckboxStage} from "../utils/CheckboxStage";

export default function AnswerField(props: {stage: Stage}) {
    const {stage} = props
    switch (true) {
        case stage instanceof TextboxStage:
            const textbox = stage as TextboxStage
            return <textarea placeholder={textbox.hint}/>
        case stage instanceof CheckboxStage:
            const checkbox = stage as CheckboxStage
            return <ul>
                    {checkbox.variants.map((value, index) =>
                        <li key={index}>{value}</li>
                    )}
                </ul>
        case true:
            throw "Not implemented"
    }
}