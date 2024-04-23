import styles from "./Header.module.scss";

interface Props {
  text: string;
  alt?: boolean;
}

export default function Header({ text, alt }: Props): JSX.Element {
  return <h2 className={`${styles.header} ${alt ? styles.alt : ""}`}>{text}</h2>;
}
