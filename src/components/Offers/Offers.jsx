import React from "react";
import classes from './Offers.module.scss'
import { useTranslation } from "react-i18next";

export const Offers = () => {
    const {t} = useTranslation()
    return(
        <section className={classes.offer}>
            <div className="g-container">
                <div className={classes.offer__wrapper}>
                    <h2 className={classes.offer__wrapper_title}>{t('offer.title')}</h2>
                    <p className={classes.offer__wrapper_descr}>{t('offer.descr')}</p>
                    <div className={classes.offer__wrapper__text}>
                        <p className={classes.offer__wrapper__text_title}>{t('offer.title_title')}</p>
                        <p className={classes.offer__wrapper__text_descr}>{t('offer.descr_descr')}</p>
                        <div className={classes.offer__wrapper__text__auth}>
                            <p className={classes.offer__wrapper__text__auth_item}>{t('offer.point1')}</p>
                            <p className={classes.offer__wrapper__text__auth_item}>{t('offer.point2')}</p>
                            <p className={classes.offer__wrapper__text__auth_item}>{t('offer.point3')}</p>
                        </div>
                        <div className={classes.offer__wrapper__text__underTheLine}>
                            <p className={classes.offer__wrapper__text__underTheLine_item}>{t('offer.point4')}</p>
                            <p className={classes.offer__wrapper__text__underTheLine_item}>{t('offer.point5')}</p>
                        </div>
                        <p className={classes.offer__wrapper__text_bottom}>{t('offer.underline_text')}</p>
                        <div className={classes.offer__wrapper__text__block1}>
                            <p className={classes.offer__wrapper__text__block1_text}>
                                {t('offer.message1_text')}
                            </p>
                            <div className={classes.offer__wrapper__text__block1__wrapper}>
                                <p  className={classes.offer__wrapper__text__block1__wrapper_date}>{t('offer.message1_date')}</p>
                                <p  className={classes.offer__wrapper__text__block1__wrapper_auth}>{t('offer.message1_auth')}</p>
                            </div>
                        </div>
                        <div className={classes.offer__wrapper__text__block2}>
                            <p className={classes.offer__wrapper__text__block2_text}>
                                {t('offer.message2_text')}
                            </p>
                            <div className={classes.offer__wrapper__text__block2__wrapper}>
                                <p className={classes.offer__wrapper__text__block2__wrapper_date}>{t('offer.message2_date')}</p>
                                <p className={classes.offer__wrapper__text__block2__wrapper_auth}>{t('offer.message2_auth')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}