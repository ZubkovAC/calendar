import React from 'react';


type NameColorPropsType = {
    name:string
}

const NameColor = (props:NameColorPropsType) => {
    return (
        <a href="" >
            <h3 style={{color:'blue'}}>{props.name}</h3>
        </a>
    );
};

export default NameColor;