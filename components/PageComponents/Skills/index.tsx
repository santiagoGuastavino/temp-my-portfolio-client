import Header from "@/components/Header";
import Section from "@/components/Section";
import {
  DockerImage,
  ExpressjsImage,
  GitImage,
  JavascriptImage,
  NestjsImage,
  NextjsImage,
  NodejsImage,
  ReactjsImage,
  TypescriptImage,
} from "@/public";
import ImageAndTextLayout from "@/components/ImageAndTextLayout";
import { IImageAndText } from "@/types";

export default function Skills(): JSX.Element {
  return (
    <Section name="Skills">
      <Header text="Skills" />
      <ImageAndTextLayout imageAndTextArray={skills} />
    </Section>
  );
}

const skills: IImageAndText[] = [
  {
    image: TypescriptImage,
    text: "Typescript",
  },
  {
    image: JavascriptImage,
    text: "Javascript",
  },
  {
    image: NodejsImage,
    text: "Node.js",
  },
  {
    image: NestjsImage,
    text: "Nest.js",
  },
  {
    image: ExpressjsImage,
    text: "Express.js",
  },
  {
    image: ReactjsImage,
    text: "React",
  },
  {
    image: NextjsImage,
    text: "Next.js",
  },
  {
    image: GitImage,
    text: "Git",
  },
  {
    image: DockerImage,
    text: "Docker",
  },
];
