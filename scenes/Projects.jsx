import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import enTranslations from '../english';
import esTranslations from '../spanish';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, language }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const translation = language === "english" ? enTranslations : esTranslations;
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{description}</p>
        <p className="mt-7">
        {translation.contactCTA}
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = ({ language }) => {
  const translation = language === "english" ? enTranslations : esTranslations;

  return (
    <section id={translation.proyectsNavbar} className="pt-32 pb-20">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
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
            <span className="text-red">{translation.pro}</span>{translation.yects}
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
         {translation.projectsSubtitle}
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            {translation.uiProjectCategory}
          </div>
          <Project title="Project 1" description={translation.project1Description} language={language}/>
          <Project title="Project 2" description={translation.project2Description} language={language}/>

          {/* ROW 2 */}
          <Project title="Project 3" description={translation.project3Description} language={language}/>
          <Project title="Project 4" description={translation.project4Description} language={language}/>
          <Project title="Project 5" description={translation.project5Description} language={language}/>

          {/* ROW 3 */}
          <Project title="Project 6" description={translation.project6Description} language={language}/>
          <Project title="Project 7" description={translation.project7Description} language={language}/>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            {translation.adminPanelProjectCategory}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
