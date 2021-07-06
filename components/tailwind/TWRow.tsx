import React from "react";

interface TWRowProps {
    children: React.ReactNode,
    className?: string
}

const TWRow = ({children, className}: TWRowProps) => {
    return (
        <div className={`grid grid-cols-12 gap-x-4 ${className ?? ''}`}>
            {children}
        </div>
    )
}

export default TWRow;
