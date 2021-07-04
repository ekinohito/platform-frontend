import React from 'react';

interface Props {
    checked: boolean,
    answer: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export default function QuestionVariant({checked, answer, onChange}: Props) {
    return (
        <label className="">
            <input type="radio" checked={checked} onChange={onChange}/>
            <span
                className="text-black text-2xl font-mono ml-3"
            >
                {answer}
            </span>
        </label>
    )
}
