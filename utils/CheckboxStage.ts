import Stage from "./Stage";

export class CheckboxStage extends Stage {
    variants: string[];
    constructor(question: string, variants: string[]) {
        super(question);
        this.variants = [...variants];
    }
}