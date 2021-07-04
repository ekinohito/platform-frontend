import React, {useEffect, useState} from "react";

export default function TimerComponent(props: {time: number}) {
    const {time} = props

    const sec = Math.trunc(time / 1000)
    const min = Math.trunc(sec / 60)
    return <div>
        {min}:{(sec % 60)<10?'0':''}{sec % 60}
    </div>
}
