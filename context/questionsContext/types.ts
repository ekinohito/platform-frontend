interface Question {
    question: string,
    done: boolean
}

interface CheckboxQuestion extends Question {
    variants: string[],
    checked: number
}

interface TextboxQuestion extends Question {
    hint: string,
    answer: string
}

export type {Question, CheckboxQuestion, TextboxQuestion}
