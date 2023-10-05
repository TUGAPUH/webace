import React from 'react';
import style from './carouselInfo.module.scss';
import ProfilePhoto from './img/Tigr.jpg';
import AllProfiles from './img/Group71Rofl.svg';
import Dot1 from './img/Ellipse88.svg';
import Dot2 from './img/Ellipse89.svg';
import Dot3 from './img/Ellipse90.svg';
import Dot4 from './img/Ellipse91.svg';
import Dot5 from './img/Ellipse92.svg';

export const CarouselInfo = () => {
    return (
        <section className={style.sectionWrapper}>
            <div className={style.header}>
                <h1>What our happy client say</h1>
                <span>Several selected clients, who already believe in our service.</span>
            </div>
            <div className={style.body}>

                <div className={style.currentProfile}>
                    <img src={ProfilePhoto} alt="ProfilePhoto" />
                </div>

                <div className={style.description}>
                    <h1>Matthew Paul</h1>
                    <span>
                        Perfect, very good job! Самый крутой дизайнер на районе.
                    </span>
                    <div className={style.dotSections}>
                        <img src={Dot1} alt="dotSection" />
                        <img src={Dot2} alt="dotSection" />
                        <img src={Dot3} alt="dotSection" />
                        <img src={Dot4} alt="dotSection" />
                        <img src={Dot5} alt="dotSection" />
                    </div>
                </div>

                <div className={style.allProfiles}>
                    <img src={AllProfiles} alt="allProfiles" />
                </div>

            </div>
        </section>
    );
};