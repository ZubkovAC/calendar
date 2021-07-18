import React from 'react';
import css from './cell.module.css'
type CellPropsType = {
    id:number
    switchP:()=>void
}

export const Cell = (props:CellPropsType) => {



    return (
        <span className={css.cell}>
            <button onClick={()=>props.switchP()}>{props.id}</button>
        </span>
    );
};

