import React from "react";

export default function NormalButton(props: {onClick: React.MouseEventHandler, children: any}) {
    const {onClick, children} = props
    return <button className="border-2 border-blue-dark rounded px-3
                     py-2 mx-3 w-full sm:w-1/3 my-4 sm:my-0 hover:bg-blue-primary hover:text-white"
                   onClick={onClick}>{children}</button>
}