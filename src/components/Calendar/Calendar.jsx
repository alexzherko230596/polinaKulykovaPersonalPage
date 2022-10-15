import React from "react";
import classes from './Calendar.module.scss'
import { useTranslation } from "react-i18next";
import { ItemDateAction } from "../ItemDateAction/ItemDateAction";

export const Calendar = () => {
    const {t} = useTranslation()
    return(
        <div className={classes.calendar}>
            <div className="g-container">
                <div className={classes.calendar__wrapper}>
                    <h2 className={classes.calendar__wrapper_title}>{t('calendar.title')}</h2>
                    <div className={classes.calendar__wrapper_devider}/>
                    <div className={classes.calendar__wrapper__month}>
                        <div className={classes.calendar__wrapper__month__element}>
                            <p className={classes.calendar__wrapper__month__element_title}>November 2022</p>
                            <div className={classes.calendar__wrapper__month__element_devider}/>
                            <div className={classes.calendar__wrapper__month__element__content}>
                                <p className={classes.calendar__wrapper__month__element__content_title}>luzerner theater</p>
                                <p className={classes.calendar__wrapper__month__element__content_title}>“Die Schneekönigin”</p>
                                <div className={classes.calendar__wrapper__month__element__content__middleText}>
                                    <p className={classes.calendar__wrapper__month__element__content_descr}>KOMPOSITION: Sam penderbayne</p>
                                    <p className={classes.calendar__wrapper__month__element__content_descr}>libretto: christian schönfelder</p>
                                </div>
                                <p className={classes.calendar__wrapper__month__element__content_title}>Premiere 08.11.22 Bühne</p>
                                <a href="https://www.luzernertheater.ch/dieschneekoenigin" target="_blank" rel="noreferrer" className={classes.calendar__wrapper__month__element__content_link}>
                                    <p className={classes.calendar__wrapper__month__element__content_descr}>polina kylikova (mezzosopran) <br />- prinzessin, Raubertochter,  lappin</p>
                                </a>
                                <ItemDateAction day = {'08.11.2022'} time = {'13:00-14:45'} program = {'premiere'} isTwo={false}/>
                                <ItemDateAction day = {'09.11.2022'} time = {'10:00-11:15'} program = {'Vorlstellung'} isTwo={false}/>
                                <ItemDateAction day = {'11.11.2022'} time = {'14:30-15:45'} program = {'sonst.veranst.'} isTwo={false}/>
                                <ItemDateAction day = {'12.11.2022'} time = {'13:30-14:45'} program = {'Vorlstellung'} isTwo={false}/>
                                <ItemDateAction day = {'20.11.2022'} time = {'13:30-14:45'} program = {'Vorlstellung'} isTwo={true} secondTime = {'17:00-18:15'}/>
                            </div>
                        </div>

                        <div className={classes.calendar__wrapper__month__element}>
                            <p className={classes.calendar__wrapper__month__element_title}>DEZEMBER 2022</p>
                            <div className={classes.calendar__wrapper__month__element_devider}/>
                            <div className={classes.calendar__wrapper__month__element__content}>
                                <ItemDateAction day = {'03.12.2022'} time = {'13:00-14:45'} program = {'Vorstellung'} isTwo={false}/>
                                <ItemDateAction day = {'07.12.2022'} time = {'13:30-14:45'} program = {'Vorstellung'} isTwo={false}/>
                                <ItemDateAction day = {'08.12.2022'} time = {'13:30-14:45'} program = {'Vorstellung'} isTwo={true} secondTime = {'17:00-18:15'}/>
                                <ItemDateAction day = {'09.12.2022'} time = {'10:00-11:15'} program = {'Vorstellung'} isTwo={false}/>
                                <ItemDateAction day = {'11.12.2022'} time = {'13:30-14:45'} program = {'Vorstellung'} isTwo={true} secondTime = {'17:00-18:15'}/>
                                <ItemDateAction day = {'14.12.2022'} time = {'13:30-14:45'} program = {'Vorstellung'} isTwo={true} secondTime = {'17:00-18:15'}/>
                                <ItemDateAction day = {'15.12.2022'} time = {'10:00-11:15'} program = {'Vorstellung'} isTwo={false}/>
                                <ItemDateAction day = {'18.12.2022'} time = {'13:30-14:45'} program = {'Vorstellung'} isTwo={true} secondTime = {'17:00-18:15'}/>
                                <ItemDateAction day = {'24.12.2022'} time = {'13:30-14:45'} program = {'Vorstellung'} isTwo={false}/>
                                <ItemDateAction day = {'26.12.2022'} time = {'13:30-14:15'} program = {'Vorstellung'} isTwo={false}/>
                            </div>
                        </div>

                        <div className={classes.calendar__wrapper__month__element}>
                            <p className={classes.calendar__wrapper__month__element_title}>YANVAR 2023</p>
                            <div className={classes.calendar__wrapper__month__element_devider}/>
                            <div className={classes.calendar__wrapper__month__element__content}>
                                <ItemDateAction day = {'02.01.2023'} time = {'13:30-14:45'} program = {'Vorstellung'} isTwo={true} secondTime = {'17:00-18:15'}/>
                                <ItemDateAction day = {'08.01.2023'} time = {'13:00-14:45'} program = {'Vorstellung'} isTwo={false}/>
                                <ItemDateAction day = {'15.01.2023'} time = {'13:30-14:45'} program = {'Vst zum letzten mal'} isTwo={false}/>
                            </div>
                        </div>

                        <div className={classes.calendar__wrapper__month__element}>
                            <p className={classes.calendar__wrapper__month__element_title}>FEBRUAR 2023</p>
                            <div className={classes.calendar__wrapper__month__element_devider}/>
                            <div className={classes.calendar__wrapper__month__element__content}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}