import React, {useState} from "react";
import classes from './Header.module.scss'
import { useTranslation } from "react-i18next";

export const Header = (props) => {
    
    const {t, i18n} = useTranslation()
    const [showPhoto, setShowPhoto] = useState(false)
    const [isEn, setEn] = useState(false)
    const changeContent = (num) => {
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
    return(
        <div className={classes.header}>
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
    )
}