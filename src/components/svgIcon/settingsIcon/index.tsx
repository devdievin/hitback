// Styles
import { colors } from "../../../styles/colors";

type SettingsIconProps = {
  width: string | number | undefined;
  height: string | number | undefined;
  stroke: string;
  strokeWidth?: string | number;
  strokeLinecap?: string;
  strokeLinejoin?: string;
};

export default function SettingsIcon({
  width = 22,
  height = 22,
  stroke = colors.softWhite,
  strokeWidth = "1.2",
  strokeLinecap = "round",
  strokeLinejoin = "round",
}: SettingsIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 14C12.6569 14 14 12.6569 14 11C14 9.3431 12.6569 8 11 8C9.3431 8 8 9.3431 8 11C8 12.6569 9.3431 14 11 14Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap={strokeLinecap}
        stroke-linejoin={strokeLinejoin}
      />
      <path
        d="M18.6224 9.3954L17.5247 6.7448L19 5L17 3L15.2647 4.48295L12.5578 3.36974L11.9353 1H9.981L9.3491 3.40113L6.70441 4.51596L5 3L3 5L4.45337 6.78885L3.3725 9.4463L1 10V12L3.40111 12.6555L4.51575 15.2997L3 17L5 19L6.79116 17.5403L9.397 18.6123L10 21H12L12.6045 18.6132L15.2551 17.5155C15.6969 17.8313 17 19 17 19L19 17L17.5159 15.2494L18.6139 12.598L20.9999 11.9772L21 10L18.6224 9.3954Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap={strokeLinecap}
        stroke-linejoin={strokeLinejoin}
      />
    </svg>
  );
}
