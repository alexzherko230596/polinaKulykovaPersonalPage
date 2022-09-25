import React, {useState} from "react";
import classes from './Header.module.scss'

export const Header = (props) => {

    const [showPhoto, setShowPhoto] = useState(false)
    const changeContent = (num) => {
        props.setTabNumber(num)
        setShowPhoto(false)
    }
    const showPhotoMEnu = () => {
        setShowPhoto(true)
    }
    return(
        <div className={classes.header}>
            <div className={classes.header__menu}>
                <ul className={classes.header__menu__ul}>
                    <li className={props.tabNUmber === 1 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={() => changeContent(1)}>Home</li>
                    <li className={props.tabNUmber === 2 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={() => changeContent(2)}>LEBENSLAUF</li>
                    <li className={props.tabNUmber === 3 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={() => changeContent(3)}>OFFERTE</li>
                    <li className={props.tabNUmber === 4 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={() => changeContent(4)}>Presse</li>
                    <div className={classes.header__menu__ul__photo}>
                        <li className={props.tabNUmber === 5 || props.tabNUmber === 6 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={showPhotoMEnu}>Potos</li>
                        <div className={ showPhoto ? classes.header__menu__ul__photo__modal : classes.header__menu__ul__photo__modal_hide}> 
                            <div className={props.tabNUmber === 5 ? `${classes.header__menu__ul__photo__modal__photoes_active} ${classes.header__menu__ul__photo__modal__photoes}` : classes.header__menu__ul__photo__modal__photoes} onClick={ () => changeContent(5)}>
                                <p className={classes.header__menu__ul__photo__modal__photoes_title}>PORTRET FOTOS</p>
                            </div>
                            <div className={props.tabNUmber === 6 ? `${classes.header__menu__ul__photo__modal__perfomance_active} ${classes.header__menu__ul__photo__modal__perfomance}` : classes.header__menu__ul__photo__modal__perfomance} onClick={ () => changeContent(6)}>
                                <p className={classes.header__menu__ul__photo__modal__perfomance_title}>PERFOMANCES</p>
                            </div>
                        </div>
                    </div>
                    <li className={props.tabNUmber === 7 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={() => changeContent(7)}>Videos</li>
                    <li className={props.tabNUmber === 8 ? `${classes.header__menu__ul_item} ${classes.header__menu__ul_item_active}` : classes.header__menu__ul_item} onClick={() => changeContent(8)}>Kontakt</li>
                </ul>
            </div>
            <div className={classes.header__language}>
                <button className={classes.header__language_item}>EN</button>
                <div className={classes.header__language_devider}/>
                <button className={classes.header__language_item}>DE</button>
            </div>
        </div>
    )
}