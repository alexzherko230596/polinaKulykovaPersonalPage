import React from "react";
import classes from './PhotoPersonal.module.scss'

export const PhotoPersonal = () => {
    return(
        <div className={classes.photo}>
            <div className="g-container">
                <div className={classes.photo__wrapper}>
                    <h2 className={classes.photo__wrapper_title}>fotos</h2>
                    <div className={classes.photo__wrapper_devider}>
                        <p className={classes.photo__wrapper_descr}>POrtret  |  fotograf:  </p>
                    </div>
                    <img src={require('../../img/photo1.jpg')} className={classes.photo__wrapper_photo1}/>
                    <div className={classes.photo__wrapper_margin}>
                        <img src={require('../../img/photo2.jpg')} className={classes.photo__wrapper_photo2}/>
                        <img src={require('../../img/photo3.jpg')} className={classes.photo__wrapper_photo2}/>
                    </div>
                    <div className={classes.photo__wrapper_margin}>
                        <img src={require('../../img/photo4.jpg')} className={classes.photo__wrapper_photo2}/>
                        <img src={require('../../img/photo5.jpg')} className={classes.photo__wrapper_photo2}/>
                    </div>
                    <img src={require('../../img/photo6.jpg')} className={classes.photo__wrapper_photo1}/>
                    <div className={classes.photo__wrapper_margin}>
                        <img src={require('../../img/photo7.jpg')} className={classes.photo__wrapper_photo2}/>
                        <img src={require('../../img/photo8.jpg')} className={classes.photo__wrapper_photo2}/>
                    </div>
                    <div className={classes.photo__wrapper_margin}>
                        <img src={require('../../img/photo8.jpg')} className={classes.photo__wrapper_photo2}/>
                        <img src={require('../../img/photo10.jpg')} className={classes.photo__wrapper_photo2}/>
                    </div>
                    <img src={require('../../img/photo11.jpg')} className={classes.photo__wrapper_photo1}/>
                </div>
            </div>
        </div>
    )
}