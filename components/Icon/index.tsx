import { useEffect, useRef, useState } from "react";

interface Props {
  icon: "menu" | "close";
  onClick: (event?: React.MouseEvent<HTMLElement>) => void;
}

export default function Icon({ icon, onClick }: Props): JSX.Element {
  const svgRef = useRef<SVGSVGElement>(null);

  const [color, setColor] = useState<string | null>(null);

  useEffect(() => {
    if (svgRef.current) {
      const inheritedColor = findInheritedColor(svgRef.current.parentElement || document.body);

      setColor(inheritedColor);
    }
  }, []);

  let viewBox: string = "";

  switch (icon) {
    case "menu":
      viewBox = "0 0 24 24";
      break;
    case "close":
      viewBox = "0 -960 960 960";
      break;
  }

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      viewBox={viewBox}
      width="30px"
      fill={color !== null ? color : ""}
      onClick={() => onClick()}
    >
      {icon === "menu" && (
        <>
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </>
      )}
      {icon === "close" && (
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      )}
    </svg>
  );
}

const findInheritedColor = (element: HTMLElement): string | null => {
  const computedStyle = window.getComputedStyle(element);
  const color = computedStyle.getPropertyValue("color");

  if (color) {
    return color;
  }

  return null;
};
