import React from 'react';
import style from './helped.module.scss';
import Img1 from './img/cardImg/box-search1.svg';
import Img4 from './img/cardImg/chart-square1.svg';
import Img2 from './img/cardImg/code-11.svg';
import Img3 from './img/cardImg/empty-wallet1.svg';


export const HelpedSection = () => {
    return (
        <section className={style.sectionWrapper}>
            <div className={style.block}>

                <div className={style.helpedInfoBlock}>
                    <span className={style.header}>How can we help your Business ?</span>
                    <span className={style.descriprion}>
                        We build readymade websites, mobile applications, and elaborate online business services.
                    </span>
                </div>

                <div className={style.cardsBlock1}>
                    <div className={style.card} id={style.card1}>
                        <div>
                            <img src={Img1} alt="img" width={'74px'} height={'74px'} />
                        </div>
                        <h1>Business genius</h1>
                        <span>
                            We present you a proposal and discuss niffty-gritty like
                        </span>
                    </div>
                    <div className={style.card} id={style.card2} >
                        <div>
                            <img src={Img2} alt="img" />
                        </div>
                        <h1>Development Website and App</h1>
                        <span>
                            Communication protocols apart from engagement models
                        </span>
                    </div>
                </div>

                <div className={style.cardsBlock2}>
                    <div className={style.card} id={style.card3}>
                        <div>
                            <img src={Img3} alt="img" />
                        </div>
                        <h1>Financial Planning System</h1>
                        <span>
                            Protocols apart from aengage models, pricing billing
                        </span>
                    </div>
                    <div className={style.card} id={style.card4}>
                        <div>
                            <img src={Img4} alt="img" />
                        </div>
                        <h1>Market Analysis Project</h1>
                        <span>
                            Protocols apart from aengage models, pricing billing
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};