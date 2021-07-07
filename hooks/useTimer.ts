import {useState, useEffect} from "react";

export default function useTimer(duration: number): {sec, min, hour} {
    const [time, setTime] = useState(duration)
    useEffect(() => {
        const timer =  setInterval(() => setTime(time => time - 1), 1000)
        return () => clearInterval(timer)
    }, [])
    return {
        sec: time % 60,
        min: Math.floor(time / 60) % 60,
        hour: Math.floor(time / 3600)
    }
}
