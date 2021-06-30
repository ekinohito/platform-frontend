import React from "react";
import styles from "../styles/Frame.module.css"

export default function Frame({children}) {
    return <div className={styles.card}>
        {children}
    </div>
}