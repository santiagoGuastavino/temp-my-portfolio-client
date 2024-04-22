import { useState } from "react";
import styles from "./TopBar.module.scss";
import { Icon, Section } from "@/components";
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
        <Section name="TopBar">
          {links.map((link: string, index: number) => (
            <div className={styles.linkBox} key={`${link}-${index}`}>
              <Link to={link}>{link}</Link>
            </div>
          ))}
        </Section>
      ) : (
        <></>
      )}
    </>
  );
}
