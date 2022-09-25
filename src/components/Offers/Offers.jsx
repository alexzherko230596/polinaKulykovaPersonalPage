import React from "react";
import classes from './Offers.module.scss'

export const Offers = () => {
    return(
        <section className={classes.offer}>
            <div className="g-container">
                <div className={classes.offer__wrapper}>
                    <h2 className={classes.offer__wrapper_title}>Offerte</h2>
                    <p className={classes.offer__wrapper_descr}>Wenn Sie der Meinung sind, dass Musik die einzige internationale und einzigartige Sprache ist, die von jedem verstanden werden kann, vom Kleinkind bis zum Erwachsenen, dann ist es mir eine große Freude, Ihnen die Magie der Klänge vorzustellen und Sie in eine Welt der Harmonie und des Staunens zu entführen, wenn auch nur für eine kurze Zeit.</p>
                    <div className={classes.offer__wrapper__text}>
                        <p className={classes.offer__wrapper__text_title}>Ich kann Vorführen:</p>
                        <p className={classes.offer__wrapper__text_descr}>• Ein klassisches Musikkonzert mit Werken der zeitgenössischen Klassik und Schlagern</p>
                        <div className={classes.offer__wrapper__text__auth}>
                            <p className={classes.offer__wrapper__text__auth_item}>• Solist im Chor</p>
                            <p className={classes.offer__wrapper__text__auth_item}>• Heimkonzerte </p>
                            <p className={classes.offer__wrapper__text__auth_item}>• Gottesdienste</p>
                        </div>
                        <p className={classes.offer__wrapper__text_bottom}>Mit großer Liebe und Freude im Herzen werde ich gerne für Sie singen. </p>
                        <div className={classes.offer__wrapper__text__block1}>
                            <p className={classes.offer__wrapper__text__block1_text}>„Stimmgewaltig und virtuos, die Mitglieder der Spirito Corda 
                                Danke, dass sie uns diesen wunderbaren Opernabend nach Brienz gebracht hast.“
                            </p>
                            <div className={classes.offer__wrapper__text__block1__wrapper}>
                                <p  className={classes.offer__wrapper__text__block1__wrapper_date}>2.6.2022</p>
                                <p  className={classes.offer__wrapper__text__block1__wrapper_auth}>Therese Wirz</p>
                            </div>
                        </div>
                        <div className={classes.offer__wrapper__text__block2}>
                            <p className={classes.offer__wrapper__text__block2_text}>
                                „Qualitativ hochstehendes Opern-Programm. Professionelle Artisten mit hervorragenden Stimmen. Kenner*innen werden überrascht und Neueinsteiger*innen werden erfolgreich in die Opernwelt eingeführt. Mit meiner besten Empfehlung!“
                            </p>
                            <div className={classes.offer__wrapper__text__block2__wrapper}>
                                <p className={classes.offer__wrapper__text__block2__wrapper_date}>21.2.2022 </p>
                                <p className={classes.offer__wrapper__text__block2__wrapper_auth}>Andreas Riedwyl</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}