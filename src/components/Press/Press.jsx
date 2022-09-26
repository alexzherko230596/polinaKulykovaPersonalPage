import React from "react";
import classes from './Press.module.scss'
import { useTranslation } from "react-i18next";

export const Press = () => {
    const {t} = useTranslation()
    return(
        <div className={classes.press}>
            <div className="g-container">
                <div className={classes.press__wrapper}>
                    <h2 className={classes.press__wrapper_title}>{t('press.title')}</h2>
                    <div className={classes.press__wrapper__block1}>
                        <div className={classes.press__wrapper__block1__head}>
                            <div className={classes.press__wrapper__block1__head__wrapper}>
                                <p className={classes.press__wrapper__block1__head__wrapper_number}>1</p>
                            </div>
                            <p className={classes.press__wrapper__block1__head_title}>{t('press.text1_title')}</p>
                        </div>
                        <div className={classes.press__wrapper__block1__body}>
                            <p className={classes.press__wrapper__block1__body_text}>{t('press.text1_text1')}</p>
                            <p className={classes.press__wrapper__block1__body_text_top}>{t('press.text1_text2')}</p>
                            <a 
                                className={classes.press__wrapper__block1__body_link}
                                target="_blank" 
                                rel="noreferrer"
                                href="https://web.bielertagblatt.ch/ich-bin-meine-groesste-konkurrentineine-interessante-begabung-mit-mut-und-sorgfaltdie-zeit-der-diven"
                                >
                                    Website
                            </a>
                        </div>
                    </div>

                    <div className={classes.press__wrapper__block2}>
                        <div className={classes.press__wrapper__block2__head}>
                            <div className={classes.press__wrapper__block2__head__wrapper}>
                                <p className={classes.press__wrapper__block2__head__wrapper_number}>2</p>
                            </div>
                            <p className={classes.press__wrapper__block2__head_title}>{t('press.text2_title')}</p>
                        </div>
                        <div className={classes.press__wrapper__block2__descr}>
                            <p className={classes.press__wrapper__block2__descr_text}>{t('press.text2_descr')}</p>
                        </div>
                        <div className={classes.press__wrapper__block2__body}>
                            <p className={classes.press__wrapper__block2__body_text}>{t('press.text2_text1')}</p>
                            <p className={classes.press__wrapper__block1__body_text_top}>{t('press.text2_text2')}</p>
                            <p className={classes.press__wrapper__block1__body_text_top}>{t('press.text2_text3')}</p>
                            <p className={classes.press__wrapper__block1__body_text_top}>{t('press.text2_text4')}</p>
                            <p className={classes.press__wrapper__block1__body_text_top}>{t('press.text2_text5')}</p>
                            <a 
                                className={classes.press__wrapper__block2__body_link}
                                target="_blank" 
                                rel="noreferrer"
                                href="https://agenda.bielertagblatt.ch/de/veranstaltung/opernabend-busswil">
                                    Website
                            </a>
                        </div>
                    </div>

                    <div className={classes.press__wrapper__block3}>
                        <div className={classes.press__wrapper__block3__head}>
                            <div className={classes.press__wrapper__block3__head__wrapper}>
                                <p className={classes.press__wrapper__block3__head__wrapper_number}>3</p>
                            </div>
                            <p className={classes.press__wrapper__block3__head_title}>{t('press.text3_title')}</p>
                        </div>
                        <div className={classes.press__wrapper__block3__body}>
                            <p className={classes.press__wrapper__block3__body_text}>{t('press.text3_text1')}</p>
                            <p className={classes.press__wrapper__block1__body_text_top}>{t('press.text3_text2')}</p>
                            <p className={classes.press__wrapper__block1__body_text_top}>29.03.2022</p>
                            <a 
                                className={classes.press__wrapper__block3__body_link}
                                target="_blank" 
                                rel="noreferrer"
                                href="https://www.srf.ch/audio/regionaljournal-bern-freiburg-wallis/berner-opern-ensemble-vereint-ukrainerinnen-und-russen?partId=12167970&ns_source=mobile&srg_sm_medium=fb&fbclid=IwAR0KL3MDLSWjbOIViUI3lJOJSkRUV5oSDD80GEm5H2AjuGUCUBehTpaP5D"
                                >
                                    Website
                            </a>
                        </div>
                    </div>

                    <div className={classes.press__wrapper__block4}>
                        <div className={classes.press__wrapper__block4__head}>
                            <div className={classes.press__wrapper__block4__head__wrapper}>
                                <p className={classes.press__wrapper__block4__head__wrapper_number}>4</p>
                            </div>
                            <p className={classes.press__wrapper__block4__head_title}>{t('press.text4_title')}</p>
                        </div>
                        <div className={classes.press__wrapper__block4__body}>
                            <p className={classes.press__wrapper__block4__body_text}>{t('press.text4_text1')}</p>
                            <p className={classes.press__wrapper__block1__body_text_top}>{t('press.text4_text2')}</p>
                            <p className={classes.press__wrapper__block1__body_text_top}>{t('press.text4_text3')}</p>
                            <p className={classes.press__wrapper__block1__body_text_top}>{t('press.text4_text4')}</p>
                            <a 
                                className={classes.press__wrapper__block4__body_link}
                                target="_blank" 
                                rel="noreferrer"
                                href="https://www.jungfrauzeitung.ch/artikel/200738/?fbclid=IwAR2VTAqqfUSKWttYTsuCqtvJbuRnys3c5aahFwUYkk1kLQ1NK_mv3gt4jq8
                                "
                                >
                                    Website
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}