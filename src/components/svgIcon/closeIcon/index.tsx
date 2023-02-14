// Styles
import { colors } from "../../../styles/colors";

type CloseIconProps = {
  width: number | string | undefined;
  height: number | string | undefined;
  fill: string | undefined;
};

export default function CloseIcon({
  width = 87,
  height = 88,
  fill = colors.lightGray,
}: CloseIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 87 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M68.6251 23.7712L63.5515 18.6975L43.4366 38.8123L23.3218 18.6975L18.2482 23.7712L38.363 43.886L18.2482 64.0008L23.3218 69.0745L43.4366 48.9597L63.5515 69.0745L68.6251 64.0008L48.5103 43.886L68.6251 23.7712Z"
        fill={fill}
      />
    </svg>
  );
}
