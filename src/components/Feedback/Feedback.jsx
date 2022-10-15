import React, {useState, useEffect} from "react";
import classes from './Feedback.module.scss'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import emailjs, { sendForm } from 'emailjs-com';
import { useTranslation } from "react-i18next";

export const Feedback = () => {

    const {t} = useTranslation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')
    const [disabled, isDisabled] = useState(true)
    const [error, setError] = useState('')
    const [isSend, setSend] = useState(true)
    const [isLoading, setLoading] = useState(false)

    const handleButton = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm(process.env.REACT_APP_USER_TEMPLATE, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_PERSON)
        .then((result) => {
            setName('')
            setEmail('')
            setSubject('')
            setPhone('')
            setComment('')
            setSend(false)
            setLoading(false)
        }, (error) => {
            setError('Something went wrong. Try again')
        });
    }

    const handleShown = () => {
        setSend(true)
    }

    useEffect(() => {
        if(name && email && subject && phone && comment){
            isDisabled(false)
            setError('')
        }
        else{
            isDisabled(true)
        }
    }, [name, email, subject, phone, comment])

    return(
        <div className={classes.feedback}>
            <div className="g-container">
                <div className={classes.feedback__wrapper}>
                    <h2 className={classes.feedback__wrapper_title}>{t('contact.title')}</h2>
                    <div className={classes.feedback__wrapper_devider}/>
                    <div className={classes.feedback__wrapper__form}>
                        <div className={classes.feedback__wrapper__form__social}>
                            <a href="https://www.facebook.com/polya.kulikova" target="_blank" rel="noreferrer">
                                <img className={classes.main__wrapper__form__social_img} alt='facebook' src={facebook}/>
                            </a>
                            <div className={classes.feedback__wrapper__form__social_devider}/>
                            <a href="https://instagram.com/polina_kulykova?r=nametag" target="_blank" rel="noreferrer">
                                <img className={classes.main__wrapper__form__social_img} alt='instagram' src={instagram}/>
                            </a>
                        </div>
                        {isSend ? 
                            isLoading ? 
                            <div className={classes.feedback__wrapper__form__sendForm}>
                                <div className={classes.feedback__wrapper__form__sendForm_loading}/>
                            </div>
                            :
                            <form className={classes.feedback__wrapper__form__fillData} onSubmit={handleButton}>
                                <div className={classes.feedback__wrapper__form__fillData__personal}>
                                    <input 
                                        className={classes.feedback__wrapper__form__fillData__personal_name}
                                        placeholder='NAME:*'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        name='name'/>
                                    <input 
                                        className={classes.feedback__wrapper__form__fillData__personal_email}
                                        placeholder='E-MAIL:*'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        name='email'/>
                                </div>
                                <input 
                                    className={classes.feedback__wrapper__form__fillData_subject}
                                    placeholder='BETREF:*'
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    name='subject'/>
                                <input className={classes.feedback__wrapper__form__fillData_number}
                                    placeholder='RUFUMMER:*'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    name='phone'/>
                                <textarea 
                                    className={classes.feedback__wrapper__form__fillData_comment}
                                    placeholder='IHRE NACHRICHT:*'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    maxLength={200}
                                    name='comment'
                                    />
                                <button type = 'submit' className={classes.feedback__wrapper__form__fillData_btn} disabled={disabled}>{t('contact.btn')}</button>
                                <p className={classes.feedback__wrapper__form__fillData_error}>{error}</p>
                            </form>
                        :
                            <div className={classes.feedback__wrapper__form__success}>
                                <p className={classes.feedback__wrapper__form__success_title}>{t('contact.btn_text')}</p>
                                <button className={classes.feedback__wrapper__form__success_btn} onClick={handleShown}>{t('contact.btn_btn')}</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}