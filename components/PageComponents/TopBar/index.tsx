import { useState } from "react";
import styles from "./TopBar.module.scss";
import { Icon } from "@/components";
import { Link } from "react-scroll";

export default function TopBar(): JSX.Element {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  const handleClick = (): void => {
    setShowLinks(!showLinks);
  };

  const links: string[] = ["Home", "Experience", "Skills", "Work", "About", "Contact"];

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.title}>{showLinks ? <></> : <h1>Santiago Guastavino</h1>}</div>
        <div className={styles.menu}>
          <Icon icon={showLinks ? "close" : "menu"} onClick={() => handleClick()} />
        </div>
      </nav>
      {showLinks ? (
        <section className={styles.mobileSection}>
          {links.map((link: string, index: number) => (
            <div key={`${link}-${index}`}>
              <Link to={link} onClick={() => handleClick()}>
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
