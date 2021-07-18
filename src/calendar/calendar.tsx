import React, {useState} from 'react';
import css from './calendar.module.css'
import {Cell} from "./cell/cell";
import {TimeWork} from "./timeWork/timeWork";

const date =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 21,22,23,24,25,26,27,28,29,30]

export const Calendar = () => {
    const [edit,setEdit] = useState<boolean>(false)
    const switchP = () =>{
        setEdit(!edit)
    }
    return (
        <div>
            <div className={css.calendar}>
                <div className={css.container}>
                    <div className={css.header}>2021</div>
                    <div className={css.body}>
                        {
                            date.map(d =>{
                                return <Cell key={d} id={d} switchP={switchP} />
                            })
                        }

                    </div>
                </div>
                {
                    edit && <TimeWork />
                }
            </div>

        </div>

    );
};

