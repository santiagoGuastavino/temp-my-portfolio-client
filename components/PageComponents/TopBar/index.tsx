import { useEffect, useState } from "react";
import styles from "./TopBar.module.scss";
import { Icon } from "@/components";
import { Link } from "react-scroll";

export default function TopBar(): JSX.Element {
  const [showMobileModalLinks, setShowMobileModalLinks] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const topOfThePage = window.scrollY === 0;

      setIsScrolling(!topOfThePage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (): void => {
    setShowMobileModalLinks(!showMobileModalLinks);
  };

  const links: string[] = ["Home", "Experience", "Skills", "Work", "Contact"];

  useEffect(() => {
    if (showMobileModalLinks) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showMobileModalLinks]);

  return (
    <>
      <nav className={`${styles.nav} ${isScrolling ? styles.scrolling : ""}`}>
        <Icon
          icon={showMobileModalLinks ? "close" : "menu"}
          color="main"
          size={35}
          className={styles.icon}
          onClick={() => handleClick()}
        />
        <div className={styles.desktopLinks}>
          {links.map((link: string, index: number) => (
            <div key={`${link}-${index}`}>
              <Link smooth={true} duration={500} to={link}>
                {link}
              </Link>
            </div>
          ))}
        </div>
      </nav>
      {showMobileModalLinks ? (
        <section className={styles.mobileSection}>
          {links.map((link: string, index: number) => (
            <div key={`${link}-${index}`}>
              <Link smooth={true} duration={500} to={link} onClick={() => handleClick()}>
                {link}
              </Link>
            </div>
          ))}
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
