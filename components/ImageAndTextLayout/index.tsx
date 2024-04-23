import { IImageAndText } from "@/types";
import styles from "./ImageAndTextLayout.module.scss";
import Image from "next/image";

interface Props {
  imageAndTextArray: IImageAndText[];
  link?: boolean;
}

export default function ImageAndTextLayout({ imageAndTextArray, link }: Props): JSX.Element {
  const handleClick = (url?: string): void => {
    if (link) {
      window.open(url, "_blank");
    }
  };

  return (
    <article className={styles.article}>
      {imageAndTextArray.map((element: IImageAndText, index: number) => (
        <div
          key={`${element.text}-${index}`}
          className={`${styles.div} ${link ? styles.link : ""}`}
          onClick={() => handleClick(element.link)}
        >
          <Image className={styles.image} src={element.image} alt={element.text} />
          <p>{element.text}</p>
        </div>
      ))}
    </article>
  );
}
