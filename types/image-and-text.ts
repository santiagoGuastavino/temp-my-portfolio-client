import { StaticImageData } from "next/image";

export interface IImageAndText {
  image: StaticImageData;
  text: string;
  link?: string;
}
