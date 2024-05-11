import Section from "@/components/Section";
import styles from "./Experience.module.scss";
import Header from "@/components/Header";
import { IExperience } from "@/types";

export default function Experience(): JSX.Element {
  return (
    <Section name="Experience">
      <Header text="Experience" />
      <div className={styles.sectionSubWrapper}>
        {experiences.map((experience: IExperience, index: number) => (
          <div className={styles.articleWrapper} key={`${experience.company}-${index}`}>
            <article className={styles.article}>
              <p className={styles.title}>{experience.title}</p>
              <div className={styles.subTitle}>
                <p className={styles.company}>{experience.company}</p>
                <div className={styles.fromUntil}>
                  <span>{experience.from}</span>
                  <span>-</span>
                  <span>{experience.until}</span>
                </div>
              </div>
              <div className={styles.tech}>
                {experience.tech.map((tech: string, index: number) => (
                  <>
                    <span key={`${tech}-${index}`}>{tech}</span>
                    {index !== experience.tech.length - 1 && <span>|</span>}
                  </>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>
    </Section>
  );
}

const experiences: IExperience[] = [
  {
    company: "Digital House",
    title: "Front-end web developer",
    from: "May 2024",
    until: "Present",
    tech: ["Typescript", "Next.js"],
  },
  {
    company: "Shifta",
    title: "Full stack web developer",
    from: "May 2023",
    until: "May 2024",
    tech: ["Typescript", "Next.js", "Nest.js"],
  },
  {
    company: "Limboteams",
    title: "Back-end web developer",
    from: "Aug 2022",
    until: "May 2023",
    tech: ["Typescript", "Nest.js", "MongoDB"],
  },
  {
    company: "Punto de compra",
    title: "Front-end web developer",
    from: "Aug 2022",
    until: "Dec 2022",
    tech: ["Javascript", "React.js", "Vue.js"],
  },
  {
    company: "Pixel Ecom",
    title: "Full stack web developer",
    from: "Sep 2021",
    until: "Aug 2022",
    tech: ["Javascript", "Express.js", "React.js"],
  },
  {
    company: "Game central",
    title: "Full stack web developer",
    from: "Mar 2021",
    until: "Sep 2021",
    tech: ["Javascript", "Express.js", "MVC"],
  },
];
