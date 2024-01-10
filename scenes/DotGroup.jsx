import AnchorLink from "react-anchor-link-smooth-scroll";
import enTranslations from '../english';
import esTranslations from '../spanish';

const DotGroup = ({ selectedPage, setSelectedPage, language }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  const translation = language === 'english' ? enTranslations : esTranslations;
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href={`#${translation.homeNavbar}`}
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href={`#${translation.ourTeamNavbar}`}
        className={`${
          selectedPage === "Nuestro Equipo" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("Nuestro Equipo")}
      />

      <AnchorLink
        href={`#${translation.proyectsNavbar}`}
        className={`${
          selectedPage === "proyectos" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("proyectos")}
      />

      <AnchorLink
        href={`#${translation.newsletterNavbar}`}
        className={`${
          selectedPage === "newsletter" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("newsletter")}
      />

      <AnchorLink
        href={`#${translation.contactNavbar}`}
        className={`${
          selectedPage === "contacto" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contacto")}
      />
    </div>
  );
};

export default DotGroup;
