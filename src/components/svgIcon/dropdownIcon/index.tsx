type DropdownIconProps = {
  width: string | number;
  height: string | number;
  fill: string;
};

export default function DropdownIcon({
  width,
  height,
  fill,
}: DropdownIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M6.66664 7.12026L12.6666 0.879761H0.666626L6.66664 7.12026Z"
      />
    </svg>
  );
}
