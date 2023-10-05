import React from 'react';
import style from './ourClient.module.scss';
import googleLogo from './img/googleLogo.svg';
import airbnbLogo from './img/airbnbLogo.svg';
import uberEatsLogo from './img/uberEatsLogo.svg'
import amazonLogo from './img/amazonLogo.svg';
export const OurClientSection = () => {

    return (
        <section className={style.sectionWrapper}>
            <div className='wrapper' style={{ height: 'inherit' }}>
                <div className={style.block}>

                    <div className={style.ourClientInfo}>
                        <span className={style.header}>Our Client</span>
                        <span className={style.description}>
                            Several selected clients, who already believe in our service.
                        </span>
                    </div>

                    <div className={style.ourClientLogo}>
                        <img src={googleLogo} alt="googleLogo" width='150.48px' height='49.38px' />
                        <img src={airbnbLogo} alt="airbnbLogo" width='166.41px' height='52.14px' />
                        <img src={uberEatsLogo} alt="uberEatsLogo" width='166.41px' height='27.73px' />
                        <img src={amazonLogo} alt="amazonLogo" width='141.55px' height='42.61px' />
                    </div>

                </div>
            </div>
        </section>
    );
};