interface Props {
  icon: "menu" | "close";
  color: "white";
  size: number;
  onClick: (event?: React.MouseEvent<HTMLElement>) => void;
  className: string;
}

export default function Icon({ icon, color, size, onClick, className }: Props): JSX.Element {
  let viewBox: string = "";
  let fill: string = "";

  switch (icon) {
    case "menu":
      viewBox = "0 0 24 24";
      break;
    case "close":
      viewBox = "0 -960 960 960";
      break;
  }

  switch (color) {
    case "white":
      fill = "rgb(204 214 246)";
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}px`}
      viewBox={viewBox}
      width={`${size}px`}
      fill={fill}
      onClick={() => onClick()}
      className={className}
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
