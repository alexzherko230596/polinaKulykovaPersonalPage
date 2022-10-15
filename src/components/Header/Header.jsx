import React, {useState} from "react";
import classes from './Header.module.scss'
import { useTranslation } from "react-i18next";
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'

export const Header = (props) => {
    
    const {t, i18n} = useTranslation()
    const [showPhoto, setShowPhoto] = useState(false)
    const [isBurger, setBurger] = useState(false)
    const [isEn, setEn] = useState(false)
    const changeContent = (num) => {
        setBurger(false)
        props.setTabNumber(num)
        setShowPhoto(false)
    }
    const showPhotoMEnu = () => {
        setShowPhoto(true)
    }
    const changeLanguage = (num) => {
        if(num === 1 ){
            if(isEn == false){
                i18n.changeLanguage('en')
                setEn(true)
            }
        }
        else{
            if(isEn == true){
                i18n.changeLanguage('de')
                setEn(false)
            }
        }
    }
    const handleBurger = () => {
        setBurger(prev => !prev)
    }
    return(
        <div className={classes.header}>
            <div className="g-container">
                <div className={classes.header__wrapper}>
                    <div className={classes.header__menu}>
                        <ul className={classes.header__menu__ul}>
                            <li className={props.tabNUmber === 1 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={() => changeContent(1)}>{t('header.home')}</li>
                            <li className={props.tabNUmber === 2 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={() => changeContent(2)}>{t('header.continue')}</li>
                            <li className={props.tabNUmber === 3 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={() => changeContent(3)}>{t('header.offers')}</li>
                            <li className={props.tabNUmber === 4 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={() => changeContent(4)}>{t('header.press')}</li>
                            <div className={classes.header__menu__ul__photo}>
                                <li className={props.tabNUmber === 5 || props.tabNUmber === 6 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={showPhotoMEnu}>{t('header.photo')}</li>
                                <div className={ showPhoto ? classes.header__menu__ul__photo__modal : classes.header__menu__ul__photo__modal_hide}> 
                                    <div className={props.tabNUmber === 5 ? `${classes.header__menu__ul__photo__modal__photoes_active} ${classes.header__menu__ul__photo__modal__photoes}` : classes.header__menu__ul__photo__modal__photoes} onClick={ () => changeContent(5)}>
                                        <p className={classes.header__menu__ul__photo__modal__photoes_title}>{t('header.photo1')}</p>
                                    </div>
                                    <div className={props.tabNUmber === 6 ? `${classes.header__menu__ul__photo__modal__perfomance_active} ${classes.header__menu__ul__photo__modal__perfomance}` : classes.header__menu__ul__photo__modal__perfomance} onClick={ () => changeContent(6)}>
                                        <p className={classes.header__menu__ul__photo__modal__perfomance_title}>{t('header.photo2')}</p>
                                    </div>
                                </div>
                            </div>
                            <li className={props.tabNUmber === 9 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={() => changeContent(9)}>{t('header.calendar')}</li>
                            <li className={props.tabNUmber === 7 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={() => changeContent(7)}>{t('header.video')}</li>
                            <li className={props.tabNUmber === 8 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={() => changeContent(8)}>{t('header.contact')}</li>
                        </ul>
                    </div>
                    <div className={classes.header__language}>
                        <button onClick={() => changeLanguage(1)} className={isEn ? `${classes.header__language_item} ${classes.header__language_item_active}` :  classes.header__language_item}>EN</button>
                        <div className={classes.header__language_devider}/>
                        <button onClick={() => changeLanguage(0)} className={isEn ?  classes.header__language_item : `${classes.header__language_item} ${classes.header__language_item_active}`}>DE</button>
                    </div>
                </div>
                <div className={classes.header__wrapperMobile}>
                    <div className={classes.header__wrapperMobile__burgerMenu}>
                        <div className={classes.header__wrapperMobile__burgerMenu__social}>
                            <a href="https://www.facebook.com/polya.kulikova" target="_blank" rel="noreferrer">
                                <img className={classes.header__wrapperMobile__burgerMenu__social_img} alt='facebook' src={facebook}/>
                            </a>
                            <div className={classes.header__wrapperMobile__burgerMenu__social_devider}/>
                            <a href="https://instagram.com/polina_kulykova?r=nametag" target="_blank" rel="noreferrer">
                                <img className={classes.header__wrapperMobile__burgerMenu__social_img} alt='instagram' src={instagram}/>
                            </a>
                        </div>
                        <div className={classes.header__wrapperMobile__burgerMenu__rightBlock}>
                            <div className={classes.header__wrapperMobile__burgerMenu__rightBlock__languages}>
                                <button onClick={() => changeLanguage(1)} className={isEn ? `${classes.header__wrapperMobile__burgerMenu__rightBlock__languages_item} ${classes.header__wrapperMobile__burgerMenu__rightBlock__languages_item_active}` :  classes.header__wrapperMobile__burgerMenu__rightBlock__languages_item}>EN</button>
                                <div className={classes.header__wrapperMobile__burgerMenu__rightBlock__languages_devider}/>
                                <button onClick={() => changeLanguage(0)} className={isEn ?  classes.header__wrapperMobile__burgerMenu__rightBlock__languages_item : `${classes.header__wrapperMobile__burgerMenu__rightBlock__languages_item} ${classes.header__wrapperMobile__burgerMenu__rightBlock__languages_item_active}`}>DE</button>
                            </div>
                            <div className={classes.header__wrapperMobile__burgerMenu__rightBlock__menu} onClick={handleBurger}>
                                <div className={classes.header__wrapperMobile__burgerMenu__rightBlock__menu_central}>
                                    <span />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={isBurger ? classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list : classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list_hide}>
                <ul className={classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul}>
                    <li className={props.tabNUmber === 1 ? `${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} ${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item_active}` : classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} onClick={() => changeContent(1)}>{t('header.home')}</li>
                    <li className={props.tabNUmber === 2 ? `${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} ${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item_active}` : classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} onClick={() => changeContent(2)}>{t('header.continue')}</li>
                    <li className={props.tabNUmber === 3 ? `${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} ${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item_active}` : classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} onClick={() => changeContent(3)}>{t('header.offers')}</li>
                    <li className={props.tabNUmber === 4 ? `${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} ${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item_active}` : classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} onClick={() => changeContent(4)}>{t('header.press')}</li>
                    <li className={props.tabNUmber === 5 ? `${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} ${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item_active}` : classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} onClick={() => changeContent(5)}>{t('header.photo1')}</li>
                    <li className={props.tabNUmber === 6 ? `${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} ${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item_active}` : classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} onClick={() => changeContent(6)}>{t('header.photo2')}</li>
                    <li className={props.tabNUmber === 9 ? `${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} ${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item_active}` : classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} onClick={() => changeContent(9)}>{t('header.calendar')}</li>
                    <li className={props.tabNUmber === 7 ? `${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} ${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item_active}` : classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} onClick={() => changeContent(7)}>{t('header.video')}</li>
                    <li className={props.tabNUmber === 8 ? `${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} ${classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item_active}` : classes.header__wrapperMobile__burgerMenu__rightBlock__menu__list__ul_item} onClick={() => changeContent(8)}>{t('header.contact')}</li>
                </ul>   
            </div>
        </div>
    )
}