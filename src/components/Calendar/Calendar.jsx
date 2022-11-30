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
                            <p className={classes.calendar__wrapper__month__element_title}>DEZEMBER 2022</p>
                            <div className={classes.calendar__wrapper__month__element_devider}/>
                            <div className={classes.calendar__wrapper__month__element__content}>
                                <div className={classes.calendar__wrapper__month__element__content__middle}>
                                    <p className={classes.calendar__wrapper__month__element__content_title}>Eucharistiefeier</p>
                                    <p className={classes.calendar__wrapper__month__element__content_title}>der Weihnachtsmette</p>
                                    <p className={classes.calendar__wrapper__month__element__content_title}>mit dem Cäcilienchor</p>
                                    <div className={classes.calendar__wrapper__month__element__content__middleText}>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Die Rollen: Prinzessin,</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Räubertochter, Lappin</p>
                                        <div className={classes.calendar__wrapper__month__element__content__middleText} />
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Sa. 24.12.2022, 23.00 Uhr</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Kirche St. Josef, Uitikonerstrasse 31</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>8952 Schlieren</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Liturge: Oliver Quilab</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Musik: Simon Nadasi</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Programm:</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>die Messe in B-Dur von </p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Matthäus Fischer (1763 - 1840)</p>
                                        <div className={classes.calendar__wrapper__month__element__content__middleText} />
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Als Solisten wirken:</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Corinne Sutter, Sopran</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Polina Kulykova, Alt</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Andrejs Krutojs, Tenor</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Gabor Kabok, Bass</p>
                                        <div className={classes.calendar__wrapper__month__element__content__middleText} />
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Liturge: Oliver Quilab</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Musik: Simon Nadasi</p>
                                        <div className={classes.calendar__wrapper__month__element__content__middleText} />
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Anita Zeller, Konzertmeisterin</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Cäcilienchor Schlieren</p>
                                        <p className={classes.calendar__wrapper__month__element__content_descr}>Gunhard Mattes, Leitung</p>
                                    </div>
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