import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            {/* Additional sections like courses and testimonials can be added here */}
            <Footer />
        </>
    );
};

export default Home;
