import { Home, TopBar, Experience, Skills, Work } from "@/components";

export default function IndexPage(): JSX.Element {
  return (
    <>
      <TopBar />
      <Home />
      <Experience />
      <Skills />
      <Work />
    </>
  );
}
