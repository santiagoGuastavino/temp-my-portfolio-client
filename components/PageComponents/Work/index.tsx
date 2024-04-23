import Header from "@/components/Header";
import ImageAndTextLayout from "@/components/ImageAndTextLayout";
import Section from "@/components/Section";
import {
  GameCentralImage,
  MercadoLiebreImage,
  MoviesReactReduxImage,
  ParallaxEffectImage,
  PhotographyPortfolioImage,
  PimientaYSalImage,
  SimpleSampleImage,
  TuiterImage,
} from "@/public";
import { IImageAndText } from "@/types";

export default function Work(): JSX.Element {
  return (
    <Section name="Work">
      <Header text="Work" />
      <ImageAndTextLayout imageAndTextArray={projects} link={true} />
    </Section>
  );
}

const projects: IImageAndText[] = [
  {
    image: SimpleSampleImage,
    text: "Simple Sample.",
    link: "https://simple-sample.vercel.app/",
  },
  {
    image: TuiterImage,
    text: "tuiter",
    link: "https://tuiter.vercel.app",
  },
  {
    image: PhotographyPortfolioImage,
    text: "Photography Portfolio",
    link: "https://photography-portfolio-9x7c.onrender.com/",
  },
  {
    image: PimientaYSalImage,
    text: "Pimienta & Sal",
    link: "https://pimienta-y-sal-7k17.onrender.com/",
  },
  {
    image: MoviesReactReduxImage,
    text: "My Movie App",
    link: "https://movies-react-redux.vercel.app/",
  },
  // {
  //   image: MoviesMvcImage,
  //   text: "Movies",
  //   link: "https://movies-mvc.onrender.com/",
  // },
  {
    image: MercadoLiebreImage,
    text: "Mercado Liebre",
    link: "https://mercado-liebre-rvel.onrender.com/",
  },
  {
    image: ParallaxEffectImage,
    text: "Parallax Effect",
    link: "https://parallax-effect-six.vercel.app/",
  },
  {
    image: GameCentralImage,
    text: "Game Central",
    link: "https://game-central.onrender.com/",
  },
];
