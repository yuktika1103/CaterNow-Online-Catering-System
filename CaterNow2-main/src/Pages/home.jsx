import React from "react";
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import '../index.css';
function Home() {
    return (
        <>
            <div className="App">
                <HeroSection />
                <Services />
                <Testimonials />
                <ContactForm />
            </div>
        </>
    )
}
export default Home;
