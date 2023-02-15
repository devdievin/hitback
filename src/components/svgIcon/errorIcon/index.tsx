import * as React from "react";

// Styles
import { colors } from "../../../styles/colors";

type ErrorIconProps = {
  width: number | string | undefined;
  height: number | string | undefined;
  fill: string | undefined;
};

export default function ErrorIcon({
  width = 86,
  height = 87,
  fill = colors.lightGray,
}: ErrorIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 86 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.9508 0.508194C19.2659 0.508194 0.0655518 19.7086 0.0655518 43.3934C0.0655518 67.0783 19.2659 86.2787 42.9508 86.2787C66.6357 86.2787 85.836 67.0783 85.836 43.3934C85.836 19.7086 66.6357 0.508194 42.9508 0.508194ZM36.8243 12.7611H49.0773V37.267L46.014 55.6464H39.8876L36.8243 37.267V12.7611ZM42.9508 61.7728C44.5756 61.7728 46.1339 62.4183 47.2829 63.5672C48.4318 64.7162 49.0773 66.2745 49.0773 67.8993C49.0773 69.5241 48.4318 71.0824 47.2829 72.2314C46.1339 73.3803 44.5756 74.0258 42.9508 74.0258C41.326 74.0258 39.7677 73.3803 38.6187 72.2314C37.4698 71.0824 36.8243 69.5241 36.8243 67.8993C36.8243 66.2745 37.4698 64.7162 38.6187 63.5672C39.7677 62.4183 41.326 61.7728 42.9508 61.7728Z"
        fill={fill}
      />
    </svg>
  );
}
