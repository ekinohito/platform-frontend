import React from "react";
import styles from "../styles/Button.module.css"

export default function Button({children, onClick, done=false, selected=false}) {
    return <button onClick={onClick} className={`${styles.card} ${done?styles.done:''} ${selected?styles.selected:''}`}>
        {children}
    </button>
}