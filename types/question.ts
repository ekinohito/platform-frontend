interface IQuestion {
    question: string,
    done: boolean,
    number: number
    type: "variant" | "text",
    completed: boolean
}

export interface VariantQuestion extends IQuestion {
    variants: string[],
    checked?: number,
    type: "variant"
}

export interface TextQuestion extends IQuestion {
    hint: string,
    answer: string,
    type: "text"
}

export type Question = VariantQuestion | TextQuestion;
