import React from "react";
import {TextboxStage} from "../utils/TextboxStage";
import Stage from "../utils/Stage";
import Frame from "./Frame";
import {CheckboxStage} from "../utils/CheckboxStage";

export default function MainFrame(props: {stage: Stage, index: number}) {
    const {stage, index} = props
    switch (true) {
        case stage instanceof TextboxStage:
            const textbox = stage as TextboxStage
            return <Frame>
                <h1>Question №{index + 1}</h1>
                <p>{textbox.question}</p>
                <textarea placeholder={textbox.hint}/>
            </Frame>
        case stage instanceof CheckboxStage:
            const checkbox = stage as CheckboxStage
            return <Frame>
                <h1>Question №{index + 1}</h1>
                <p>{checkbox.question}</p>
                <ul>
                    {checkbox.variants.map((value, index) =>
                        <li key={index}>{value}</li>
                    )}
                </ul>
            </Frame>
        case true:
            throw "Not implemented"
    }
}