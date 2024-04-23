interface Props {
  icon: "menu" | "close";
  color: "background" | "main" | "secondary" | "brand";
  size: number;
  onClick: (event?: React.MouseEvent<HTMLElement>) => void;
}

export default function Icon({ icon, color, size, onClick }: Props): JSX.Element {
  let viewBox: string = "";
  let filler: string = "";

  switch (icon) {
    case "menu":
      viewBox = "0 0 24 24";
      break;
    case "close":
      viewBox = "0 -960 960 960";
      break;
  }

  switch (color) {
    case "background":
      filler = "#0a192f";
      break;
    case "main":
      filler = "#ccd6f6";
      break;
    case "secondary":
      filler = "#8892b0";
      break;
    case "brand":
      filler = "#db2777";
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}px`}
      viewBox={viewBox}
      width={`${size}px`}
      fill={filler}
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
