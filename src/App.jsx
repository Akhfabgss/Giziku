import { useState, useEffect } from 'react';
import Showcase from './components/Showcase'
import Home from './components/Home'
import Steps from './components/Steps'
import Features from './components/Features'
import FAQ from './components/Faq'
import team from './components/Team'
import Team from './components/Team'
import Contact from './components/Contact'


import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 500, // opsional: animasi 1 detik
      once: true,     // animasi hanya terjadi sekali
    });
  }, []);

  return (
    <>
      <Home />
      <Steps />
      <Features />
      <Showcase />
      <FAQ />
      <Team />
      <Contact />
    </>
  )
}

export default App
