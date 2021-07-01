import React, {useState} from "react";
import Button from "../components/Button";
import {TextboxStage} from "../utils/TextboxStage";
import {CheckboxStage} from "../utils/CheckboxStage";
import MainFrame from "../components/MainFrame";

export default function Test() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const stages = [
        new TextboxStage('lorem?', 'ipsum'),
        new CheckboxStage('why?', ['because', 'because(2)', 'because(3)']),
        new CheckboxStage('why?', ['because', 'because(2)', 'because(3)']),
        new CheckboxStage('why?', ['because', 'because(2)', 'because(3)'])
    ]
    console.log(typeof stages[selectedIndex])
    return <div>
        <div style={{display: "flex"}}>
            {stages.map((value, index) =>
                <Button key={index} onClick={() => setSelectedIndex(index)} selected={index === selectedIndex}>
                    {index + 1}
                </Button>
            )}
        </div>
        <MainFrame stage={stages[selectedIndex]} index={selectedIndex}/>
    </div>
}