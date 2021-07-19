import React from 'react';
import css from './cell.module.css'
import {workers} from "../../columnData/columnHeader";

type CellPropsType = {
    id:number
    switchP:()=>void
    idCell:(id:number)=>void
    workers:number
}

export const Cell = (props:CellPropsType) => {

    const click =() => {
        props.switchP()
        props.idCell(props.id)
    }
    const colorButton ={
        backgroundColor:props.workers > 6 ? 'green' :  props.workers > 4 ? 'lightgreen' : props.workers <= 4 ? 'grey' : 'red'
    }
    return (
        <span className={css.cell}>
            <button style={colorButton} onClick={click}>{props.id}</button>
        </span>
    );
};

