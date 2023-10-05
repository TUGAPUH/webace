import React from 'react';
import { AgentProductSection } from '../Sections/AgentProductSection/AgentProductSection';
import { OurClientSection } from '../Sections/OurClientSection/OurClientSection';
import { PresentedProduct } from '../Sections/PresentedProductSection/PresentedProductSection';
import { HelpedSection } from '../Sections/HelpedSection/HelpedSection';
import { CarouselInfo } from '../Sections/CarouselInfoSection/CarouselInfoSection';
import { SubscribeSection } from '../Sections/SubscribeSection/SubscribeSection';

const Main = () => {
    return (
        <main className='mainWidth' >
            <AgentProductSection />
            <OurClientSection />
            <HelpedSection />
            <PresentedProduct />
            <CarouselInfo />
            <SubscribeSection />
        </main>
    );
};

export default Main;