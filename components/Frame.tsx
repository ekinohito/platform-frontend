import React from "react";
import styles from "../styles/Frame.module.css"

export default function Frame({children, className}) {
    return <div className={`${styles.card} ${className}`}>
        {children}
    </div>
}