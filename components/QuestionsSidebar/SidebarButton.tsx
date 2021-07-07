import React from 'react';

interface Props {
    number: number,
    active: boolean,
    completed: boolean,
    onClick: () => void
}

export default function SidebarButton({number, active, completed, onClick}: Props) {
    let color;
    if (active) color = 'bg-red';
    else if (completed) color = 'bg-blue-primary';
    else color = 'bg-gray';

    return (
        <button
            className={`h-16 w-16 rounded-xl flex justify-center items-center ${color} my-2`}
            onClick={onClick}
        >
            <span className="font-sans text-3xl text-white">{number}</span>
        </button>
    )
}
