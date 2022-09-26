import React from "react";
import classes from './Video.module.scss'
import { useTranslation } from "react-i18next";

export const Video = () => {
    const {t} = useTranslation()
    return(
        <div className={classes.video}>
            <div className="g-container">
                <div className={classes.video__wrapper}> 
                    <h2 className={classes.video__wrapper_title}>{t('video.title')}</h2>
                    <div className={classes.video__wrapper_devider}>
                        <p className={classes.video__wrapper_descr}>{t('video.descr')}</p>
                    </div>
                    <div className={classes.video__wrapper_one}>
                        <iframe 
                            width="100%" 
                            height="490" 
                            src="https://www.youtube.com/embed/-5W5BFtnVHQ" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                    </div>
                    <div className={classes.video__wrapper__two}>
                        <div className={classes.video__wrapper__two__first}>
                            <p className={classes.video__wrapper__two__first_header}>H. Sutermeister „ Die schwarze Spinne“ Arie Christine</p>
                            <div className={classes.video__wrapper__two__first_devider}/>
                            <iframe 
                                width="100%" 
                                height="240" 
                                src="https://www.youtube.com/embed/_1XnEyKd8jo" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen></iframe>
                        </div>
                        <div className={classes.video__wrapper__two__first}>
                            <p className={classes.video__wrapper__two__first_header}>H. Sutermeister „ Die schwarze Spinne“ Arie Christine</p>
                            <div className={classes.video__wrapper__two__first_devider}/>
                            <iframe 
                                width="100%" 
                                height="240" 
                                src="https://www.youtube.com/embed/gCiaAzv1c4A" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>

                    <div className={classes.video__wrapper__two}>
                        <div className={classes.video__wrapper__two__first}>
                            <p className={classes.video__wrapper__two__first_header}>Zusammenstellung von Projekt „Satabat Mater“ G.B. Pergolesi mit einzigartiger Akkordeonbegleitung.</p>
                            <div className={classes.video__wrapper__two__first_devider}/>
                            <iframe 
                                width="100%" 
                                height="240" 
                                src="https://www.youtube.com/embed/dL_sX825U2Y" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div className={classes.video__wrapper__two__first}>
                            <p className={classes.video__wrapper__two__first_header}>H. Sutermeister „ Die schwarze Spinne“ Arie Christine</p>
                            <div className={classes.video__wrapper__two__first_devider}/>
                            <iframe 
                                width="100%" 
                                height="240" 
                                src="https://www.youtube.com/embed/OyYLYa9Ri-Y" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}