import React from "react";
import classes from './ItemDateAction.module.scss'

export const ItemDateAction = (props) => {
    return(
        <div className={classes.date}>
            <div className={classes.date__wrapper}>
                <p className={classes.date__wrapper_day}>{props.day}</p>
                <p className={classes.date__wrapper_time}>{props.time}</p>
                <p className={classes.date__wrapper_program}>{props.program}</p>
            </div>
            {props.isTwo &&
                <div className={classes.date__secondBlock}>
                    <p className={classes.date__secondBlock_day}>{props.day}</p>
                    <p className={classes.date__secondBlock_time}>{props.secondTime}</p>
                    <p className={classes.date__secondBlock_program}>{props.program}</p>
                </div>
            }
        </div>
    )
}