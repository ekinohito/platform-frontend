import React from "react";
import styles from "../styles/Button.module.css"

export default function Button({children,
                                   onClick,
                                   circle=false,
                                   done=false,
                                   selected=false,
                                   disabled=false,
                                   ...attrs
                               }) {
    return <button
        onClick={onClick}
        className={`${styles.button} ${done?styles.done:''} ${selected?styles.selected:''} ${circle?styles.circle:''}`}
        disabled={disabled}
        {...attrs}
    >
        {children}
    </button>
}