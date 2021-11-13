import React from 'react';
import Navber from '../../component/Home/Navber/Navber';
import Banner from '../../component/Home/Banner/Banner';
import About from '../../component/Home/About/About';
import Contact from '../../component/Home/Contact/Contact';
import Fotter from '../../component/Home/Footer/Fotter';
import Services from '../../component/Services/Services';

const Home = () => {
  return (
    <div id="home">
      <Navber />
      <Banner />
      <About />
      <Services />
      <Contact />
      <Fotter />
    </div>
  );
};

export default Home;
