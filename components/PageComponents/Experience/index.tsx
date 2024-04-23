import Section from "@/components/Section";
import styles from "./Experience.module.scss";
import Header from "@/components/Header";
import { IExperience } from "@/types";

export default function Experience(): JSX.Element {
  return (
    <Section name="Experience">
      <header className={styles.header}>
        <Header text="Experience" />
      </header>
      <article className={styles.article}>
        {experiences.map((experience: IExperience, index: number) => (
          <div key={`${experience.company}-${index}`}>
            <h3>{experience.title}</h3>
            <h3>{experience.company}</h3>
            <div>
              <span>{experience.from}</span>
              <span>{experience.until}</span>
            </div>
            <div>
              {experience.tech.map((tech: string, index: number) => (
                <span key={`${tech}-${index}`}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </article>
    </Section>
  );
}

const experiences: IExperience[] = [
  {
    company: "Shifta",
    title: "Software Engineer",
    from: "May 2023",
    until: "Present",
    tech: ["Typescript", "Node.js", "Next.js", "React.js", "Nest.js", "REST", "Docker", "Jenkins"],
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
      "AWS Lambda",
      "AWS S3",
      "Docker",
    ],
  },
  {
    company: "Pixel Ecom",
    title: "Full stack web developer",
    from: "September 2021",
    until: "August 2022",
    tech: [
      "Javascript",
      "Node.js",
      "Express.js",
      "REST",
      "React.js",
      "MySQL",
      "PHP",
      "Wordpress",
      "Shopify",
      "Ecommerce",
    ],
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
      "Ecommerce",
      "Heroku",
    ],
  },
];
