import Stage from "./Stage";

export class TextboxStage extends Stage {
    hint: string;
    constructor(question: string, hint: string = "") {
        super(question);
        this.hint = hint;
    }
}