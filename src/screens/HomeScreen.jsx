import React from 'react';
import Banner from '../components/banner/Banner';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import Support from '../components/support/Support';

const HomeScreen = () => {
    return (
        <>
            <Hero/>
            <Banner/>
            <Services/>
            <Support/>
        </>
    );
};

export default HomeScreen;