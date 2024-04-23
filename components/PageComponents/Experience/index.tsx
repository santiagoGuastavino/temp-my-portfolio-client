import Section from "@/components/Section";
import styles from "./Experience.module.scss";
import Header from "@/components/Header";
import { IExperience } from "@/types";

export default function Experience(): JSX.Element {
  return (
    <Section name="Experience">
      <Header text="Experience" />
      {experiences.map((experience: IExperience, index: number) => (
        <article className={styles.article} key={`${experience.company}-${index}`}>
          <h3 className={styles.title}>{experience.title}</h3>
          <h3 className={styles.company}>{experience.company}</h3>
          <div className={styles.fromUntil}>
            <span>{experience.from}</span>
            <span>-</span>
            <span>{experience.until}</span>
          </div>
          <div className={styles.tech}>
            {experience.tech.map((tech: string, index: number) => (
              <span key={`${tech}-${index}`}>{tech}</span>
            ))}
          </div>
        </article>
      ))}
    </Section>
  );
}

const experiences: IExperience[] = [
  {
    company: "Shifta",
    title: "Software Engineer",
    from: "May 2023",
    until: "Present",
    tech: [
      "Typescript",
      "Node.js",
      "Next.js",
      "React.js",
      "Nest.js",
      "Zustand",
      "REST",
      "Clean Architecture",
      "Docker",
    ],
  },
  {
    company: "Limboteams",
    title: "Back-end web developer",
    from: "August 2022",
    until: "May 2023",
    tech: [
      "Typescript",
      "Node.js",
      "Nest.js",
      "REST",
      "MongoDB",
      "OOP",
      "Domain Driven Design",
      "Multitier Architecture",
      "TDD",
      "WebSocket",
      "Dependency Injection",
      "AWS",
      "Docker",
    ],
  },
  {
    company: "Pixel Ecom",
    title: "Full stack web developer",
    from: "September 2021",
    until: "August 2022",
    tech: ["Javascript", "Node.js", "Express.js", "REST", "React.js", "MySQL", "PHP"],
  },
  {
    company: "Game central",
    title: "Full stack web developer",
    from: "March 2021",
    until: "September 2021",
    tech: [
      "Javascript",
      "Node.js",
      "Express.js",
      "REST",
      "MVC",
      "HTML",
      "CSS",
      "React.js",
      "Heroku",
    ],
  },
];
