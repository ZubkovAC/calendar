import React, {useState} from 'react';
import {Slider} from "antd";
import 'antd/dist/antd.css';
import css from './timeWork.module.css'


const marks = {0:0, 2:2, 4:4, 6:6, 8:8, 10:10, 12:12}

export const TimeWork = () => {
    const [time, setTime] = useState<number>(8)
    let disabled = false
    return (
        <div className={css.timeWork}>

            <Slider defaultValue={time} disabled={disabled} max={12} marks={marks} step={0.5} onChange={(value)=>setTime(value)}/>
            <div>opening hours: {time}</div>
        </div>
    );
};
