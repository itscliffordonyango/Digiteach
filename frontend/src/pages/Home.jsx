import React from 'react';
import Hero from '../components/Hero';
import ProgramSection from '../components/ProgramSection';
import About from '../components/About';
import LearningAreas from '../components/LearningAreas';
import Impact from '../components/Impact';
import GetInvolved from '../components/GetInvolved';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <ProgramSection />
      <About />
      <LearningAreas />
      <Impact />
      <GetInvolved />
      <Testimonials />
      <Partners />
      <CTA />
    </>
  );
};

export default Home;
