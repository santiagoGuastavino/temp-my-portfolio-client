import { useEffect, useState } from "react";
import styles from "./TopBar.module.scss";
import { Icon } from "@/components";
import { Link } from "react-scroll";

export default function TopBar(): JSX.Element {
  const [showMobileModalLinks, setShowMobileModalLinks] = useState<boolean>(false);

  const handleClick = (): void => {
    setShowMobileModalLinks(!showMobileModalLinks);
  };

  const links: string[] = ["Home", "Experience", "Skills", "Work", "About", "Contact"];

  useEffect(() => {
    if (showMobileModalLinks) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showMobileModalLinks]);

  return (
    <>
      <nav className={styles.nav}>
        <Icon
          icon={showMobileModalLinks ? "close" : "menu"}
          color="background"
          size={35}
          onClick={() => handleClick()}
        />
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
