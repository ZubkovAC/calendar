import React from 'react';

type SalaryColorPropsType = {
    salary:string
}

export const SalaryColor = (props:SalaryColorPropsType) => {
    return (
        <h3>
            {props.salary}
        </h3>
    );
};
