import React from 'react';
import style from './footer.module.scss'
import Facebook from './img/facebook.svg';
import Twiiter from './img/twitter.svg';
import Linkedin from './img/linkedin.svg';

const Footer = () => {
    return (
        <div className={style.mainWidth}>
            <footer className={style.footerWrapper + ' wrapper'}>

                <div className={style.infoBlock}>

                    <div className={style.descriptionBlock}>
                        <h1>WebAce</h1>
                        <span>
                            Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
                        </span>
                    </div>

                    <div className={style.ulBlock1 + ' ' + style.ulBlock}>
                        <h1 className={style.ulH1}>What We Do</h1>
                        <ul>
                            <li><a href="#a">Web Design</a></li>
                            <li><a href="#b">App Design</a></li>
                            <li><a href="#c">Social Media Manage</a></li>
                            <li><a href="#d">Market Analysis Project</a></li>
                        </ul>
                    </div>

                    <div className={style.ulBlock2 + ' ' + style.ulBlock}>
                        <h1 className={style.ulH1}>Company</h1>
                        <ul>
                            <li><a href="#a">About Us</a></li>
                            <li><a href="#b">Career</a></li>
                            <li><a href="#c">Become Investor</a></li>
                        </ul>
                    </div>

                    <div className={style.ulBlock3 + ' ' + style.ulBlock}>
                        <h1 className={style.ulH1}>Support</h1>
                        <ul>
                            <li><a href="#a">FAQ</a></li>
                            <li><a href="#b">Policy</a></li>
                            <li><a href="#c">Business</a></li>
                        </ul>
                    </div>

                    <div className={style.ulBlock4 + ' ' + style.ulBlock}>
                        <h1 className={style.ulH1}>Contact</h1>
                        <ul>
                            <li><a href="#a">WhatsApp</a></li>
                            <li><a href="#b">Support 24</a></li>
                        </ul>
                    </div>

                </div>
                <div className={style.imgsOfSupportCenter}>
                    <div className={style.imgsOfSupport}>
                        <img src={Facebook} alt="facebookImg" />
                        <img src={Twiiter} alt="twitterImg" />
                        <img src={Linkedin} alt="linkedinImg" />
                    </div>
                </div>

                <div className={style.bottomLine}></div>

                <div className={style.copyRight}>
                    <span>
                        Copyright © 2022 Avi Yansah
                    </span>
                </div>

            </footer>
        </div>
    );
};

export default Footer;