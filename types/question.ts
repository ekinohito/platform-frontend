export interface Question {
    question: string,
    done: boolean,
    number: number
    type: "variant" | "text"
}

export interface VariantQuestion extends Question {
    variants: string[],
    checked?: number,
    type: "variant"
}

export interface TextQuestion extends Question {
    hint: string,
    answer: string,
    type: "text"
}
