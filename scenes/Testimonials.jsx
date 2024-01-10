import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import enTranslations from '../english';
import esTranslations from '../spanish';
import { NavLink } from "react-router-dom";

const Testimonials = ({ language }) => {
  const translation = language === "english" ? enTranslations : esTranslations;
  return (
    <section id={translation.newsletterNavbar} className="pt-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <NavLink to={`/newsletter`}>
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          {translation.newsletterTitle}
        </p>
        </NavLink>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          {translation.newsletterSubtitle}
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between ">
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
      </div>
    </section>
  );
};

export default Testimonials;