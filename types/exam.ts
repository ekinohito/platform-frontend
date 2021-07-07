interface QuestionPart {
    number: number
    question: string,
    answer: string | number,
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

type TextQuestion =
    & QuestionPart
    & {
        type: ''
    };

export type Question = TestQuestion | TextQuestion;
