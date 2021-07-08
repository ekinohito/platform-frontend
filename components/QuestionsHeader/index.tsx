import React from 'react';
import Image from "next/image";
import icon from '../../public/icons/main.svg';
import TimerComponent from "./TimerComponent";
import FinishButton from "../Buttons/FinishButton";

export default function Header() {
    return (
        <div className="absolute top-12 left-0 px-32 flex justify-between min-w-full">
            <Image src={icon} alt="icon" width={50} height={50}/>
            <TimerComponent/>
            <FinishButton/>
        </div>
    )
}
