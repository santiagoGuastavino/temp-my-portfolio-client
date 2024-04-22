import styles from "./nav.module.scss";

export default function TopBar(): JSX.Element {
  return <nav className={styles.nav}>
    <div>Title</div>
    <div>Link</div>
  </nav>;
}
