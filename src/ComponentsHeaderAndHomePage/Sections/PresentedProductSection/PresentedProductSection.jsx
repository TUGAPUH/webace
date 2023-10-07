import React from 'react';
import style from './presentedProduct.module.scss';
export const PresentedProduct = () => {
    return (
        <section className={style.sectionWrapper + ' wrapper'}>
            <div className={style.videoBlock}>
                <div className={style.video}></div>
            </div>
            <div className={style.descriptBlock}>
                <h1>Great Digital Product Agency since 2016 </h1>
                <span className={style.description}>
                    Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.
                </span>
            </div>
        </section>
    );
};