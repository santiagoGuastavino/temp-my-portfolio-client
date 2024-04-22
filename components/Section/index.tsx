import { ReactNode } from "react";
import styles from "./Section.module.scss";
import { Sections } from "@/types";

interface Props {
  children: ReactNode;
  name: Sections;
}

export default function Section({ children, name }: Props): JSX.Element {
  const Element = name as keyof JSX.IntrinsicElements;

  return (
    <Element name={name} className={styles.section}>
      {children}
    </Element>
  );
}
