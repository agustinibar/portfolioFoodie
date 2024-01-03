import React, { useEffect, useState } from 'react'
import Navbar from '../../scenes/Navbar'
import DotGroup from '../../scenes/DotGroup'
import useMediaQuery from '../../hooks/useMediaQuery';
import { motion } from "framer-motion";
import LineGradient from '../../components/LineGradient';
import MySkills from '../../scenes/MySkills';
import Projects from '../../scenes/Projects';
import Testimonials from '../../scenes/Testimonials';
import Contact from '../../scenes/Contact';
import Footer from '../../scenes/Footer';
import Landing from '../../scenes/Landing';

export const Home = () => {
    const [selectedPage, setSelectedPage] = useState("home");
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const isDesktop = useMediaQuery("(min-width: 1060px)");
    const [language, setLanguage] = useState('spanish');
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setIsTopOfPage(true);
          setSelectedPage("home");
        }
        if (window.scrollY !== 0) setIsTopOfPage(false);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className="app bg-deep-blue">
    <Navbar
    isTopOfPage={isTopOfPage}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    language={language}
    setLanguage={setLanguage}
    />
    <div className="w-5/6 mx-auto md:h-full mb-14">
    {isDesktop && (
        <DotGroup
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        
        />
    )}
    <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
    >
        <Landing setSelectedPage={setSelectedPage} language={language}/>
    </motion.div>
    </div>
    <LineGradient />
    <div className="w-5/6 mx-auto md:h-full mb-48 ">
    <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("nuestro equipo")}
    >
        <MySkills language={language}/>
    </motion.div>
    </div>
    <LineGradient />
    <div className="w-5/6 mx-auto">
    <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("proyectos")}
    >
        <Projects language={language} />
    </motion.div>
    </div>
    <LineGradient />
    <div className="w-5/6 mx-auto md:h-full mb-80 ">
    <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("testimonials")}
    >
    <Testimonials language={language}/>
    </motion.div>
    </div>  
    <LineGradient />
    <div className="w-5/6 mx-auto md:h-full">
    <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("contacto")}
    >
        <Contact language={language}/>
    </motion.div>
    </div> 
    <Footer />
    </div>
  )
}
