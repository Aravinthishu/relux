import React from 'react';
import HeroSection from '../../Components/HeroSection.jsx';
import AboutBackground from '../../assets/about-background.jpg';
import AboutContent from './AboutContent.jsx';
import WhyChoose from './WhyChoose.jsx';

const About = () => {
  return (
    <>
        <div>
      <HeroSection 
        heading="About Us" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." 
        imageSrc={AboutBackground} // Corrected this line
      />
      {/* Other content for the About page */}
    </div>
    <AboutContent/>
    <WhyChoose/>
    </>

    
  );
};

export default About;
