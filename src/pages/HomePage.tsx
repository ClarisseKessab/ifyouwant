import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ComingSoon from '../components/ComingSoon';
import Projects from '../components/Projects';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ComingSoon />
      <Services />
      <Projects />
      <AboutUs />
      <Contact />
    </>
  );
};

export default HomePage;