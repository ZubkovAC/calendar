import React from 'react';
import css from './currentPosition.module.css'

type CurrentPositionColorPropsType = {
    CurrentPosition:Array<string>
}

export const CurrentPositionColor = (props:CurrentPositionColorPropsType) => {
    return (
        <h3>
            {props.CurrentPosition.map(c=> {
                let colorText = 'blue'
                let colorBG = 'lightblue'
                if (c==='junior'){
                    colorText = 'green'
                    colorBG = 'lightgreen'
                }
                if (c==='director'){
                    colorText = 'white'
                    colorBG = 'grey'
                }
                if (c==='senior'){
                    colorText = 'red'
                    colorBG = 'rosybrown'
                }
                const color = {
                    display:'inlineBlock',
                    border:'1px solid grey',
                    padding:'4px',
                    margin:'2px',
                    color: colorText,
                    borderRadius:'3px',
                    backgroundColor: colorBG
}
               return <span style={color} key={c}>
                    {c.toLocaleUpperCase()}
                </span>
            }
            )}
        </h3>
    );
};

