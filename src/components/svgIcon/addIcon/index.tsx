// Styles
import { colors } from "../../../styles/colors";

type AddIconProps = {
  width: number | string | undefined;
  height: number | string | undefined;
  fill: string | undefined;
};

export default function AddIcon({
  width = 37,
  height = 36,
  fill = colors.lightGray,
}: AddIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6665 3.00002C10.3865 3.00002 3.6665 9.72002 3.6665 18C3.6665 26.28 10.3865 33 18.6665 33C26.9465 33 33.6665 26.28 33.6665 18C33.6665 9.72002 26.9465 3.00002 18.6665 3.00002ZM26.1665 19.5H20.1665V25.5H17.1665V19.5H11.1665V16.5H17.1665V10.5H20.1665V16.5H26.1665V19.5Z"
        fill={fill}
      />
    </svg>
  );
}
