import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX}
        fixed top-0 z-20 flex w-full items-center py-5
        ${scrolled ? "bg-[#00343c]/80 backdrop-blur" : "bg-transparent"}
        shadow-lg shadow-[#915EFF]/30
      `}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-28 w-28 object-contain" />
          <p className="flex cursor-pointer text-[24px] font-bold text-teal-mid text-shadow drop-shadow-lg">
            {config.html.title}
          </p>
        </Link>
        <ul className="flex list-none flex-row gap-10 w-full justify-end">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
                cursor-pointer text-[20px] font-medium transition-colors text-shadow
                ${active === nav.id ? "text-teal-light" : "text-white"}
                hover:text-teal-dark
                drop-shadow-lg
              `}
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`} className="text-shadow drop-shadow-lg">{nav.title}</a>
            </li>
          ))}
          <li className="cursor-pointer text-[20px] font-medium text-white hover:text-teal-dark text-shadow drop-shadow-lg">
            <Link to="/desktop" className="text-shadow drop-shadow-lg">Desktop</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
