import React from 'react';

interface Props {
    checked: boolean,
    answer: string,
    onClick: () => void
}

export default function QuestionVariant({checked, answer, onClick}: Props) {
    return (
        <div
            className="flex items-center cursor-pointer hover:opacity-75"
            onClick={onClick}
        >
            <span className={`w-3.5 h-3.5 mr-3 rounded-full  ${checked ? 'bg-red':'bg-gray'}`}/>
            <span
                className="text-black text-2xl font-mono"
            >
                {answer}
            </span>
        </div>
    )
}
