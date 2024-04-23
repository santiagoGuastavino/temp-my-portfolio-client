import Header from "@/components/Header";
import Section from "@/components/Section";
import { ISkill } from "@/types";
import {
  DockerImage,
  ExpressjsImage,
  GitImage,
  JavaImage,
  JavascriptImage,
  NestjsImage,
  NextjsImage,
  NodejsImage,
  ReactjsImage,
  TypescriptImage,
} from "@/public";
import Image from "next/image";
import styles from "./Skills.module.scss";

export default function Skills(): JSX.Element {
  return (
    <Section name="Skills">
      <Header text="Skills" />
      <article className={styles.article}>
        {skills.map((skill: ISkill, index: number) => (
          <div key={`${skill.skill}-${index}`} className={styles.skill}>
            <Image className={styles.image} src={skill.image} alt={skill.skill} />
          </div>
        ))}
      </article>
    </Section>
  );
}

const skills: ISkill[] = [
  {
    image: DockerImage,
    skill: "Docker",
  },
  {
    image: ExpressjsImage,
    skill: "Express.js",
  },
  {
    image: GitImage,
    skill: "Git",
  },
  {
    image: JavaImage,
    skill: "Java",
  },
  {
    image: JavascriptImage,
    skill: "Javascript",
  },
  {
    image: NestjsImage,
    skill: "Nest.js",
  },
  {
    image: NextjsImage,
    skill: "Next.js",
  },
  {
    image: NodejsImage,
    skill: "Node.js",
  },
  {
    image: ReactjsImage,
    skill: "React",
  },
  {
    image: TypescriptImage,
    skill: "Typescript",
  },
];
