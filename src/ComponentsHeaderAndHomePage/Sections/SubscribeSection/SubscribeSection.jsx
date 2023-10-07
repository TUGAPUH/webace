import React from 'react';
import style from './subscribe.module.scss';

export const SubscribeSection = () => {
    return (
        <section className={style.sectionWrapper}>
            <div className={style.background}>

                <div className={style.infoBlock}>
                    <h1>Subscribe Newsletter</h1>
                    <span>
                        I will update good news and promotion service not spam
                    </span>
                </div>

                <div className={style.emailBlock}>
                    <form>
                        <input type="email" placeholder='Enter your email address..' />
                        <button type='submit' onClick={(e) => e.preventDefault()}>Contact Now</button>
                    </form>
                </div>

            </div>
        </section>
    );
};
