import React from 'react'
import Hero from './Hero'
import Feature from './Feature'
import Invesments from './Invesments'
import AppCTA from './AppCTA';
import OurClients from './OurClients';
import Testimonial from './Testimonial';
import Footer from '../../Components/Footer';

function Home() {
  return (
 <>
     <Hero/>
     <Feature/>
     <Invesments/>
     <AppCTA/>
     <OurClients />
     <Testimonial/>
     <Footer/>
     
</>
);
};

export default Home