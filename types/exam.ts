interface QuestionPart {
    number: number
    question: string,
    done: boolean,
    answer: string | number,
    type: 'variant' | 'text'
}

export type VariantTestQuestion =
    & QuestionPart
    & {
        type: 'variant',
        variants: string[],
        answer?: number
    };

export type TextTestQuestion =
    & QuestionPart
    & {
        type: 'text',
        word: string,
        answer: string
    };

type TestQuestion = VariantTestQuestion | TextTestQuestion;

type TextQuestion = QuestionPart;

export type Question = TestQuestion
