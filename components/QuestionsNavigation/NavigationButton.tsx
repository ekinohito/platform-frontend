import React from 'react';

interface Props {
    onClick: () => void,
    active: boolean,
    reversed?: boolean
}

export default function NavigationButton({onClick, active, reversed}: Props) {
    return (
        <button
            onClick={onClick}
            disabled={!active}
        >
            <svg
                width="20" height="40"
                viewBox="0 0 33 58" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{transform: reversed && 'scale(-1,1)'}}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33 4.16416L8.21081 28.9533L32.8825 53.625L28.8358 57.6717L3.8147e-06 28.8358L28.8358 0L33 4.16416Z"
                    className={active ? 'fill-current text-blue-primary' : 'fill-current text-gray'}
                />
            </svg>
        </button>
    )
}
