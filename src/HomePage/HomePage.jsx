import React, {useState} from "react";
import { About } from "../components/About/About";
import { Calendar } from "../components/Calendar/Calendar";
import {Feedback} from "../components/Feedback/Feedback";
import { Header } from "../components/Header/Header";
import MainPage from "../components/MainPage/MainPage";
import { Offers } from "../components/Offers/Offers";
import { PhotoPerfom } from "../components/PhotoPerfom/PhotoPerfom";
import { PhotoPersonal } from "../components/PhotoPersonal/PhotoPersonal";
import { Press } from "../components/Press/Press";
import { Video } from "../components/Video/Video";
import classes from './HomePage.module.scss'

export const HomePage = () => {

    const [tabNUmber, setTabNumber] = useState(1)

    const handleHeader = (num) => {
        console.log('here', num)
        setTabNumber(num)
    }

    const ShowComponent = () => {
        switch(tabNUmber){
            case 1:
                return(
                    <MainPage />
                )
            case 2:
                return(
                    <About />
                )
            case 3:
                return(
                    <Offers />
                )
            case 4:
                return(
                    <Press />
                )
            case 5:
                return(
                    <PhotoPersonal />
                )
            case 6:
                return(
                    <PhotoPerfom />
                )
            case 7:
                return(
                    <Video />
                )
            case 8:
                return(
                    <Feedback />
                )
            case 9:
                return(
                    <Calendar />
                )
        }
    }
    return(
        <div className={classes.home}>
            <img className={tabNUmber === 1 ? classes.home_hide : classes.home__noteBg} src={require('../img/noteHuge.png')}/>
            <Header onClick={handleHeader} setTabNumber = {setTabNumber} tabNUmber = {tabNUmber}/>
            <ShowComponent />
        </div>
    )
}