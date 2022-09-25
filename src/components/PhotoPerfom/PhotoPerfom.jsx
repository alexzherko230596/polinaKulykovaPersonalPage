import React from "react";
import classes from './PhotoPerfom.module.scss'

export const PhotoPerfom = () => {
    return(
        <div className={classes.perfom}>
            <div className="g-container">
                <div className={classes.perfom__wrapper}>
                    <h2 className={classes.perfom__wrapper_title}>fotos</h2>
                    <div className={classes.perfom__wrapper_devider}>
                        <p className={classes.perfom__wrapper_descr}>Performances</p>
                    </div>
                    <img src={require('../../img/perfom1.jpg')} className={classes.perfom__wrapper_photo1} alt=''/>
                    <div className={classes.perfom__wrapper_margin}>
                        <img src={require('../../img/perfom2.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                        <img src={require('../../img/perfom3.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                    </div>
                    <div className={classes.perfom__wrapper_margin}>
                        <img src={require('../../img/perfom4.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                        <img src={require('../../img/perfom5.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                    </div>
                    <div className={classes.perfom__wrapper_margin}>
                        <img src={require('../../img/perfom6.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                        <img src={require('../../img/perfom7.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                    </div>
                    <div className={classes.perfom__wrapper_margin}>
                        <img src={require('../../img/perfom8.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                        <img src={require('../../img/perfom9.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                    </div>
                    <div className={classes.perfom__wrapper_margin}>
                        <img src={require('../../img/perfom10.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                        <img src={require('../../img/perfom11.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                    </div>
                    <div className={classes.perfom__wrapper_margin}>
                        <img src={require('../../img/perfom12.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                        <img src={require('../../img/perfom13.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                    </div>
                    <div className={classes.perfom__wrapper_margin}>
                        <img src={require('../../img/perfom14.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                        <img src={require('../../img/perfom15.jpg')} className={classes.perfom__wrapper_photo2} alt=''/>
                    </div>
                    <img src={require('../../img/perfom16.jpg')} className={classes.perfom__wrapper_photo1} alt=''/>
                </div>
            </div>
        </div>
    )
}