import React, {useEffect, useState} from "react";
import useTimer from "../../hooks/useTimer";

export default function TimerComponent() {
    const {sec, min, hour} = useTimer(3600);
    return (
        <span className="text-blue-secondary font-mono text-2xl">
            {hour}:{min}:{sec}
        </span>
    )
}
