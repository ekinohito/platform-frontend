import React from "react";

const TWContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`xl:container lg:px-10 ${className ?? ''}`}>
            {children}
        </div>
    )
}

export default TWContainer;
