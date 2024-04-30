import { Icon } from "@/components";
import styles from "./Loading.module.scss";

interface Props {
  height: number;
}

export default function Loading({ height }: Props): JSX.Element {
  return (
    <div className={styles.wrapper} style={{ height: height }}>
      <div className={styles.loading}>
        <Icon icon="loading" color="main" size={120} className={styles.icon} />
      </div>
    </div>
  );
}
