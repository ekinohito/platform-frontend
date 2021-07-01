import Stage from "./Stage";
import {Dispatch, SetStateAction, useState} from "react";

export class CheckboxStage extends Stage {
    variants: string[];
    selected: number;
    setSelected: Dispatch<SetStateAction<number>>;
    constructor(question: string, variants: string[], done: boolean = false, selected: number = -1) {
        super(question, done);
        this.variants = [...variants];
        const [selected_, setSelected] = useState(selected);
        this.selected = selected_
        this.setSelected = setSelected
    }

    get isFilled(): boolean {
        return this.selected > -1;
    }
}