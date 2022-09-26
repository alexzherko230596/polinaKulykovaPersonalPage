import React from "react";
import classes from './About.module.scss'
import { useTranslation } from "react-i18next";

export const About = () => {
    const {t} = useTranslation()
    return(
        <div className={classes.about}>
           <div className="g-container">
                <div className={classes.about__wrapper}>
                    <div className={classes.about__wrapper__top}>
                        <img src = {require('../../img/polinaAbout.jpg')} className={classes.about__wrapper__top_img}/>
                        <div className={classes.about__wrapper__top__text}>
                            <p className={classes.about__wrapper__top__text_item}><span>{t('about.about1_1')}</span> {t('about.about1_2')} <span> {t('about.about1_3')}</span>.</p>
                            <p className={classes.about__wrapper__top__text_item}>{t('about.about2_1')} <span>{t('about.about2_2')} </span>{t('about.about2_3')}</p>
                            <p className={classes.about__wrapper__top__text_item}><span>{t('about.about3_1')}</span> {t('about.about3_2')} <span>{t('about.about3_3')}</span></p>
                            <p className={classes.about__wrapper__top__text_item}>{t('about.about4_1')} <span>{t('about.about4_2')}</span> <br />
                                {t('about.about4_3')} <br />
                                {t('about.about4_4')} <br />
                                {t('about.about4_5')} <br />                
                            </p>
                        </div>
                    </div>
                    <div className={classes.about__wrapper__second}>
                        <p className={classes.about__wrapper__second_item}>{t('about.about5_1')} <span>{t('about.about5_2')}</span> {t('about.about5_3')} <span>{t('about.about5_4')}</span> {t('about.about5_5')} <span>{t('about.about5_6')}</span> {t('about.about5_7')}</p>
                        <p className={classes.about__wrapper__second_item}><span>{t('about.about6_1')}</span> {t('about.about6_2')} <span> {t('about.about6_3')}</span> {t('about.about6_4')}<span>{t('about.about6_5')} </span> {t('about.about6_6')}</p>
                        <p className={classes.about__wrapper__second_item}>{t('about.about7_1')} <span>{t('about.about7_2')}</span> {t('about.about7_3')}</p>
                        <p className={classes.about__wrapper__second_item}>{t('about.about8_1')} <span>{t('about.about8_2')}</span> {t('about.about8_3')}</p>
                        <p className={classes.about__wrapper__second_item}><span>{t('about.about9_1')}</span>{t('about.about9_2')}<span>{t('about.about9_3')}</span>{t('about.about9_4')}</p>
                        <p className={classes.about__wrapper__second_item}><span>{t('about.about10_1')}</span>{t('about.about10_2')}<span>{t('about.about10_3')}</span></p>
                        <p className={classes.about__wrapper__second_item}>{t('about.about11_1')}<span>{t('about.about11_2')}</span>{t('about.about11_3')}<span>{t('about.about11_4')}</span></p>
                        <p className={classes.about__wrapper__second_item}>{t('about.about12_1')}<span>{t('about.about12_2')}</span> <a href="https://www.spiritocorda.ch/" target="_blank" rel="noreferrer"> Website</a></p>
                        <p className={classes.about__wrapper__second_item}><span>{t('about.about13_1')}</span>{t('about.about13_2')}<span>{t('about.about13_3')}</span>{t('about.about13_4')}<span>{t('about.about13_5')}</span>{t('about.about13_6')}</p>
                        <p className={classes.about__wrapper__second_item}><span>{t('about.about14_1')}</span>{t('about.about14_2')}<span>{t('about.about14_3')}</span>{t('about.about14_4')}</p>
                        <p className={classes.about__wrapper__second_item}><span>{t('about.about15_1')}</span>{t('about.about15_2')}<span>{t('about.about15_3')}</span>{t('about.about15_4')}<span>{t('about.about15_5')}</span></p>
                        <p className={classes.about__wrapper__second_item}>{t('about.about16_1')}<span>{t('about.about16_2')}</span>{t('about.about16_3')}<span>{t('about.about16_4')}</span>{t('about.about16_5')}</p>
                    </div>
                </div>
           </div>
        </div>
    )
}