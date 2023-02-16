import * as React from "react";

// Styles
import { colors } from "../../../styles/colors";

type OkIconProps = {
  width: number | string | undefined;
  height: number | string | undefined;
  fill: string | undefined;
};

export default function OkIcon({
  width = 86,
  height = 72,
  fill = colors.lightGray,
}: OkIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 86 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.8438 0.147537L28.1409 43.8505L13.9669 29.6766L0.0655518 43.5779L14.2395 57.7519L28.2317 71.7442L42.1331 57.8427L85.836 14.1398L71.8438 0.147537Z"
        fill={fill}
      />
    </svg>
  );
}