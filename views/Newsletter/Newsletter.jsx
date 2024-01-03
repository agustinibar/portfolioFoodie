import React from "react";
import LineGradient from "../../components/LineGradient";
import { motion } from "framer-motion";
import enTranslations from '../../english';
import esTranslations from '../../spanish';
import { NavLink } from "react-router-dom";
import NoLandingNavbar from "../../components/Navbar/NoLandingNavbar";
import Footer from "../../scenes/Footer";

const Newsletter = ({ language }) => {
  const translation = language === "english" ? enTranslations : esTranslations;

  const newsletters = [
    {
      title: translation.article1Title,
      content: translation.article1Content,
      bgColor: "bg-blue",
    },
    {
      title: translation.article2Title,
      content: translation.article2Content,
      bgColor: "bg-red",
    },
    {
      title: translation.article3Title,
      content: translation.article3Content,
      bgColor: "bg-yellow",
    },
  ];

  return (
    <>
    <section id="newsletter" className="pt-20 pb-20 bg-deep-blue">
    <NoLandingNavbar/>
      {/* HEADING */}
      <motion.div
        className="md:w-2/3 mx-auto text-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            {translation.newsletterTitle}
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10">
          {translation.newsletterSubtitle}
        </p>
      </motion.div>

      {/* NEWSLETTERS */}
      <div className="md:flex md:justify-between m-4 ">
      <NavLink to={`/new1`}>
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[500px] flex flex-col justify-center p-16 pt-12 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <h3 className="text-center text-xl font-bold mb-6">
            {translation.article1Title}
          </h3>
          <p className="text-center text-xl">
            {translation.article1Content}
          </p>
        </motion.div>
      </NavLink>
      
      <NavLink to={`/new2`}>
        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[500px] flex flex-col justify-start p-16 pt-6 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <h3 className="text-center text-xl font-bold mb-6">
           {translation.article2Title}
          </h3>
          <p className="text-center text-xl">
            {translation.article2Content}
          </p>
        </motion.div>
      </NavLink>
      
      <NavLink to={`/new3`}>
        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[500px] flex flex-col justify-start p-16 pt-6 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <h3 className="text-center text-xl font-bold mb-6">
            {translation.article3Title}
          </h3>
          <p className="text-center text-xl">
            {translation.article3Content}
          </p>
        </motion.div>
      </NavLink>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Newsletter;