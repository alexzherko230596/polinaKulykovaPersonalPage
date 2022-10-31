import React from "react";
import classes from './Calendar.module.scss'
import { useTranslation } from "react-i18next";

export const Calendar = () => {
    const {t} = useTranslation()
    return(
        <div className={classes.calendar}>
            <div className="g-container">
                <div className={classes.calendar__wrapper}>
                    <h2 className={classes.calendar__wrapper_title}>{t('calendar.title')}</h2>
                    <p className={classes.calendar__wrapper_descr}>{t('calendar.descr')}</p>
                    <div className={classes.calendar__wrapper_devider}/>
                    <div className={classes.calendar__wrapper__month}>
                        <div className={classes.calendar__wrapper__month__element}>
                            <p className={classes.calendar__wrapper__month__element_title}>November 2022</p>
                            <div className={classes.calendar__wrapper__month__element_devider}/>
                            <div className={classes.calendar__wrapper__month__element__content}>
                                <div className={classes.calendar__wrapper__month__element__content__middle}>
                                    <p className={classes.calendar__wrapper__month__element__content_title}>luzerner theater</p>
                                    <p className={classes.calendar__wrapper__month__element__content_title}>“Die Schneekönigin”</p>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Die Rollen: Prinzessin,</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Räubertochter, Lappin</p>
                                    </div>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>PREMIERE 8.11.2022 BÜHNE</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>08.11. / 09.11. / 12.11. / 20.11</p>
                                    </div>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>KOMPOSITION: Sam penderbayne</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>libretto: christian schönfelder</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Regie: Jana Vetten</p>
                                    </div>
                                </div>
                                <div className={classes.calendar__wrapper__month__element__content__button}>
                                    <a className={classes.calendar__wrapper__month__element__content__button_link} href="https://www.luzernertheater.ch/dieschneekoenigin" target="_blank" rel="noreferrer">DETAILS</a>
                                </div>
                            </div>
                        </div>

                        <div className={classes.calendar__wrapper__month__element}>
                            <p className={classes.calendar__wrapper__month__element_title}>6 November 2022</p>
                            <div className={classes.calendar__wrapper__month__element_devider}/>
                            <div className={classes.calendar__wrapper__month__element__content}>
                                <div className={classes.calendar__wrapper__month__element__content__middle}>
                                    <p className={classes.calendar__wrapper__month__element__content_title}>GOTTESDIENST</p>
                                    <p className={classes.calendar__wrapper__month__element__content_title_hide}>GOTTESDIENST</p>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Sonntag, 06.11.</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Um 17:15 Uhr</p>
                                    </div>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Kath. Kirche St. Johanes</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Freiestrasse 13, 8570 Weinfelden</p>
                                    </div>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Programm:  M.Duruflé – Requiem </p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Musikleiterin : Manuela Eichenlaub</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={classes.calendar__wrapper__month__element}>
                            <p className={classes.calendar__wrapper__month__element_title}>27 NOVEMBER 2022</p>
                            <div className={classes.calendar__wrapper__month__element_devider}/>
                            <div className={classes.calendar__wrapper__month__element__content}>
                                <div className={classes.calendar__wrapper__month__element__content__middle}>
                                    <p className={classes.calendar__wrapper__month__element__content_title}>GOTTESDIENST</p>
                                    <p className={classes.calendar__wrapper__month__element__content_title_hide}>GOTTESDIENST</p>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText2}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Zum 1 Advent</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr_hide}>Um 17:15 Uhr</p>
                                    </div>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText2}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}> Sonntag  27.11.</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Um 10:00</p>
                                    </div>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText2}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Evangelische Kirche</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Kirchgasse 2, 8570 Weinfelden</p>
                                    </div>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText2}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Programm:</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>G.P. Telemann „Nun komm der</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Heiden Heiland“</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Musikleiter: Kristofer Kiesel</p>
                                    </div>
                                </div>
                                <div className={classes.calendar__wrapper__month__element__content__button2}>
                                    <a className={classes.calendar__wrapper__month__element__content__button_link} href="https://www.luzernertheater.ch/dieschneekoenigin" target="_blank" rel="noreferrer">DETAILS</a>
                                </div>
                            </div>
                        </div>

                        <div className={classes.calendar__wrapper__month__element}>
                            <p className={classes.calendar__wrapper__month__element_title}>DEZEMBER 2022</p>
                            <div className={classes.calendar__wrapper__month__element_devider}/>
                            <div className={classes.calendar__wrapper__month__element__content}>
                                <div className={classes.calendar__wrapper__month__element__content__middle}>
                                    <p className={classes.calendar__wrapper__month__element__content_title}>LUZERNER THEATER </p>
                                    <p className={classes.calendar__wrapper__month__element__content_title}>„DIE SCHNEEKÖNIGIN“</p>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText2}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Die Rollen: Prinzessin, Räubertochter, Lappin</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr_hide}>Um 17:15 Uhr</p>
                                    </div>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText2}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}> Sonntag  27.11.</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Um 10:00</p>
                                    </div>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText2}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>03.12. / 07.12. / 08.12. / 11.12. / 14.12. / 15.12. / 18. 12. /</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>24.12. / 26.12.</p>
                                    </div>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText2}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Komposition: Sam Penderbayne</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Libretto: Christian Schönfelder</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Regie: Jana Vetten</p>
                                    </div>
                                </div>
                                <div className={classes.calendar__wrapper__month__element__content__button2}>
                                    <a className={classes.calendar__wrapper__month__element__content__button_link} href="https://www.luzernertheater.ch/dieschneekoenigin" target="_blank" rel="noreferrer">DETAILS</a>
                                </div>
                            </div>
                        </div>

                        <div className={classes.calendar__wrapper__month__element}>
                            <p className={classes.calendar__wrapper__month__element_title}>JANUAR 2023</p>
                            <div className={classes.calendar__wrapper__month__element_devider}/>
                            <div className={classes.calendar__wrapper__month__element__content}>
                                <div className={classes.calendar__wrapper__month__element__content__middle}>
                                    <p className={classes.calendar__wrapper__month__element__content_title}>LUZERNER THEATER </p>
                                    <p className={classes.calendar__wrapper__month__element__content_title}>„DIE SCHNEEKÖNIGIN“</p>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Die Rollen: Prinzessin, Räubertochter, Lappin</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr_hide}>Um 17:15 Uhr</p>
                                    </div>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Vorstellungen    2.01. / 08.01. /15.01</p>
                                    </div>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Programm:</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Komposition: Sam Penderbayne</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Libretto: Christian Schönfelder</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Regie: Jana Vetten</p>
                                    </div>
                                </div>
                                <div className={classes.calendar__wrapper__month__element__content__button}>
                                    <a className={classes.calendar__wrapper__month__element__content__button_link} href="https://www.luzernertheater.ch/dieschneekoenigin" target="_blank" rel="noreferrer">DETAILS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}