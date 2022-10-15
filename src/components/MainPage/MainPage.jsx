import React from "react";
import classes from './MainPage.module.scss'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'

const MainPage = () => {
    return(
        <section className={classes.main}>
            <img src={require('../../img/noteWholePage.jpg')} alt='note' className={classes.main_note}/>
            <img src={require('../../img/polinaFullHeight.png')} alt='Polina' className={classes.main_polina}/>
            <img src={require('../../img/noteUpsideDown.jpg')} alt='note' className={classes.main_noteUpsediDown}/>
            <img src={require('../../img/mobileNote.jpg')} alt='note' className={classes.main_noteMobile}/>
            <div className="g-container">
                <div className={classes.main__wrapper}>
                    <p className={classes.main__wrapper_hide}>1</p>
                    <h1 className={classes.main__wrapper_h1}>
                        POLINA<br />
                        KULYKOVA<br />
                        MEZZOSOPRAN
                    </h1>
                    <div className={classes.main__wrapper__social}>
                        <a href="https://www.facebook.com/polya.kulikova" target="_blank" rel="noreferrer">
                            <img className={classes.main__wrapper__social_img} alt='facebook' src={facebook}/>
                        </a>
                        <div className={classes.main__wrapper__social_devider}/>
                        <a href="https://instagram.com/polina_kulykova?r=nametag" target="_blank" rel="noreferrer">
                            <img className={classes.main__wrapper__social_img} alt='instagram' src={instagram}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainPage