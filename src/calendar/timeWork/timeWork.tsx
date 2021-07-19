import React, {useState} from 'react';
import {Slider} from "antd";
import 'antd/dist/antd.css';
import css from './timeWork.module.css'

const marks = {0:0, 2:2, 4:4, 6:6, 8:8, 10:10, 12:12}
type TimeWorkPropsType ={
    cellId : number
}

export const TimeWork = (props:TimeWorkPropsType) => {
    const [time, setTime] = useState<number>(8)
    let disabled = false
    return (
        <div className={css.timeWork}>
            <Slider
                max={12}
                step={0.5}
                marks={marks}
                disabled={disabled}
                defaultValue={time}
                onChange={(value)=>setTime(value)}
            />
            <div>opening hours: {time}</div>
        </div>
    );
};
