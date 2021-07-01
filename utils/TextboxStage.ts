import Stage from "./Stage";
import {Dispatch, SetStateAction, useState} from "react";

export class TextboxStage extends Stage {
    hint: string;
    text: string;
    setText: Dispatch<SetStateAction<string>>;
    constructor(question: string, hint: string = "", done: boolean = false, text: string = "") {
        super(question);
        this.hint = hint;
        const [text_, setText] = useState(text);
        this.text = text_
        this.setText = setText
    }

    get isFilled(): boolean {
        return this.text != "";
    }
}