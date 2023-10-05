import React from 'react';
import style from './agentProduct.module.scss';
import productImage from './img/agentProduct.svg';
export const AgentProductSection = () => {
    return (
        <section className={style.sectionWrapper}>

            <div className={style.productInfoSide}>
                <div className={style.productCard}>
                    <span className={style.header}>A Digital Product Agency</span>
                    <span className={style.description}>
                        Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
                    </span>
                    <button className={style.btn}>Contact Now</button>

                </div>
            </div>

            <div className={style.productImageSide}>
                <img src={productImage} className={style.productImage} alt="AgentProductImage" />
            </div>
        </section>
    );
};
