import { Header, Section } from "@/components";
import styles from "./Home.module.scss";

export default function Home(): JSX.Element {
  return (
    <Section name="Home">
      <header className={styles.header}>
        <p className={styles.greet}>Hi, my name is</p>
        <Header text="Santiago Guastavino" />
        <Header text="I'm a Software Developer" alt={true} />
      </header>
      <article className={styles.article}>
        <p>Skilled in writing clean code.</p>
        <p>
          I specialize in web development, with a strong focus on creating dynamic and user-friendly
          websites.
        </p>
        <p>Proficient in mobile-first responsive design development.</p>
        <p>Dexterous in Typescript, Javascript, Java and web-based technologies.</p>
        <p>Quick learner, responsible and self-motivated.</p>
      </article>
    </Section>
  );
}
