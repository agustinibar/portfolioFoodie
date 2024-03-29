import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import esTranslations from '../../spanish';
import enTranslations from '../../english';

const NoLandingNavbar = ({ language, setLanguage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const translation = language === 'english' ? enTranslations : esTranslations;

  return (
    <nav className={`bg-red z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">Foodie's newsletter</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                <div className="flex gap-4">
                  <button onClick={() => setLanguage('spanish')}>🇪🇸</button>
                  <button onClick={() => setLanguage('english')}>🇬🇧</button>
                </div>
                <Link to={`/`}>
                    <button>Home</button>
                </Link>
                <Link to={`/newsletter`}>
                    <button>Newsletter's</button>
                </Link>
        </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                <Link to={`/`}>
                    <button>Home</button>
                </Link>
                <Link to={`/newsletter`}>
                    <button>Newsletter's</button>
                </Link>
                <div className="flex gap-4">
                  <button onClick={() => setLanguage('spanish')}>🇪🇸</button>
                  <button onClick={() => setLanguage('english')}>🇬🇧</button>
                </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NoLandingNavbar;

