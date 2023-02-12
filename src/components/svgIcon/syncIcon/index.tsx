type SyncIconProps = {
  width: string | number | undefined;
  height: string | number | undefined;
  stroke: string;
  strokeWidth?: string | number;
  strokeLinecap?: string;
  strokeLinejoin?: string;
};

export default function SyncIcon({
  width = 80,
  height = 74,
  stroke = "dodgerblue",
  strokeWidth = "9.80867",
  strokeLinecap = "round",
  strokeLinejoin = "round",
}: SyncIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.70416 44.6962C11.0549 51.3579 15.3249 57.1747 20.9767 61.413C26.6279 65.6519 33.4076 68.1227 40.461 68.5142C46.9812 68.5153 53.3437 66.5094 58.6844 62.7688C64.0251 59.0288 68.085 53.7351 70.3127 47.6073"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap={strokeLinecap}
        stroke-linejoin={strokeLinejoin}
      />
      <path
        d="M72.2186 28.8179C67.7726 16.6443 54.117 5.00003 40.4614 5.00003C33.9095 5.01845 27.5236 7.063 22.1795 10.8533C16.8349 14.6436 12.7935 19.9942 10.6097 26.1715"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap={strokeLinecap}
        stroke-linejoin={strokeLinejoin}
      />
      <path
        d="M5.00002 56.3646C6.01398 51.5699 6.82411 49.017 8.69727 44.7188C13.289 45.6681 15.8417 46.4788 20.3428 48.416"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap={strokeLinecap}
        stroke-linejoin={strokeLinejoin}
      />
      <path
        d="M75 16.9678C74.3435 21.8241 73.7244 24.4299 72.1745 28.855C67.5254 28.2481 64.9197 27.6284 60.2873 26.0296"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap={strokeLinecap}
        stroke-linejoin={strokeLinejoin}
      />
    </svg>
  );
}
