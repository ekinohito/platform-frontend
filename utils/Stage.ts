import {Dispatch, SetStateAction, useState} from "react";

export default class Stage {
    question: string;
    done: boolean;
    setDone: Dispatch<SetStateAction<boolean>>;
    constructor(question: string, done: boolean = false) {
        this.question = question
        const [done_, setDone] = useState(done)
        this.done = done_
        this.setDone = setDone
    }
}