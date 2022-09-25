import React from "react";
import classes from './About.module.scss'

export const About = () => {
    return(
        <div className={classes.about}>
           <div className="g-container">
                <div className={classes.about__wrapper}>
                    <div className={classes.about__wrapper__top}>
                        <img src = {require('../../img/polinaAbout.jpg')} className={classes.about__wrapper__top_img}/>
                        <div className={classes.about__wrapper__top__text}>
                            <p className={classes.about__wrapper__top__text_item}><span>2002</span> Beginnt Polina die Ausbildung am Klavier und in Sologesang, an der spezialisierten Musikschule der Stadt Charzyssk <span>(Region Donetsk, Ukraine)</span>.</p>
                            <p className={classes.about__wrapper__top__text_item}>Von <span>2011-2015 </span>studiert sie im Konservatorium Dnepro/Ukraine.</p>
                            <p className={classes.about__wrapper__top__text_item}><span>2019</span> erfolgt der Abschluss im <span>Bachelorstudium Gesang an der Musik-Akademie M.Glinka/Dnepro.</span></p>
                            <p className={classes.about__wrapper__top__text_item}>Zur Bühnenerfahrung von Polina Kulykova zählen <span>Auftritte in den Rollen:</span> <br />
                                • Odarka „Der Saporoger an der Donau“ von Hulak-Artemowski <br />
                                • Stecha „Nazar Stodolja“ von Dankevych <br />
                                • Lubascha „Die Zarenbraut“ von Rimsky-Korsakov  <br />
                                • Carmen „Carmen“ von Bizet (Finale)
                            </p>
                        </div>
                    </div>
                    <div className={classes.about__wrapper__second}>
                        <p className={classes.about__wrapper__second_item}>Seit <span>2019</span> Beginn des Studium für den <span>Master</span> Specialized <span>Music Performance Opera der Schweizer Opernstudio,</span> Hochschule der Künste Bern/Biel</p>
                        <p className={classes.about__wrapper__second_item}><span>„Opernskizzen Mythen Töne“</span> und Opern Werkstatt <span>„Natur und Oper“</span> Schweizer Opernstudio, HKB.Die Rolle Madre Maria und Choralto in <span>„Die Brücke von San Luis Ray“</span> von G. Reutter in TOBS Biel/Solothurn.</p>
                        <p className={classes.about__wrapper__second_item}>Gleichzeitig absolvierte sie ein Praktikum in Opernhäusern und nimmt an als Solistin in <span>„Zäller Wiehnacht“</span> von Paul Burkhard in TOBS.</p>
                        <p className={classes.about__wrapper__second_item}>Die <span>Rolle Orlofsky in „Fledermaus“</span> von Johann Strauss im „Neues Theater Dornach“.</p>
                        <p className={classes.about__wrapper__second_item}><span>2021  Haupt Rolle</span> im Abschlussprojekt <span>„Das Unheimliche“</span> von Nikona Do Dominković (HKB; Opernstudio)</p>
                        <p className={classes.about__wrapper__second_item}><span>2021  Projekt „Satabat Mater“</span> von G.B.Pergolesi <span>mit einzigartiger Akkordeonbegleitung</span></p>
                        <p className={classes.about__wrapper__second_item}>Im Rahmen von Oper-Oder-Spree <span>2021</span> (Internationaler Opernkurs auf der Burg Beeskow) erhielt Polina Kulykova <span>Publikumspreis.</span></p>
                        <p className={classes.about__wrapper__second_item}>Seit <span>2021 Mitglied als Solistin in Verein „Spiritocorda“ </span> <a href="https://www.spiritocorda.ch/" target="_blank" rel="noreferrer"> Website</a></p>
                        <p className={classes.about__wrapper__second_item}><span>2022</span> Die Dritte Dame aus <span>"Die Zauberflöte" </span> W.A. Mozart; Die erFFE4A2ste Produktion von <span>"Youth for Opera"</span> Luzern, Schweiz</p>
                        <p className={classes.about__wrapper__second_item}><span>2022</span> als Solistin und Altoverstärkung in <span>Belper Chor</span>( Bern)</p>
                        <p className={classes.about__wrapper__second_item}><span>2022</span> beginnt ihre zweite Master of Arts in <span>Musikpädagogik; Vokalpädagogik</span> Hochschule Luzern Musik; <span>HSLU</span></p>
                        <p className={classes.about__wrapper__second_item}>Sie nimmt als aktive Sängerin bei <span>Gottesdiensten</span> und <span>kirchlichen Messen</span> teil.</p>
                    </div>
                </div>
           </div>
        </div>
    )
}