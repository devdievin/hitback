import { useSelector } from "react-redux";
import { useThemeContext } from "../../../hooks/useThemeContext";
import { JsonViewer, JsonViewerTheme } from "@textea/json-viewer";

// Styles
import { colors } from "../../../styles/colors";
import { Container, DisplayContent, SvgIcon, TitleDisplay } from "./styles";

type DisplayDefaultProps = {
  width: number | string;
  height: number | string;
  fill: string;
};

export default function ResponseSection() {
  const { state } = useThemeContext();

  const { data } = useSelector(
    (rootReducer: any) => rootReducer.requestReducer
  );

  const dataTest = {
    currency: "USD",
    crypto: {
      rank: 1,
      symbol: "BTC",
      name: "Bitcoin",
      price: 22535.13,
      variation: "−1.63%",
      marketCap: "434.609B",
    },
    timestamp: 1675961428031,
    nullValues: null,
    nanValues: NaN,
    undValues: undefined,
    boolValues: true,
    dateValue: new Date(),
  };

  const example = {
    string: "this is a test string",
    integer: 42,
    array: [1, 2, 3, "test", NaN],
    float: 3.14159,
    undefined,
    object: {
      "first-child": true,
      "second-child": false,
      "last-child": null,
    },
    string_number: "1234",
    date: new Date(),
  };

  // console.log(data);

  const theme = {
    base00: state.themeName === "dark" ? colors.darkThree : colors.softWhite, // background-color
    base01: "gray", // unknown
    base02: colors.lightGray, // horizontal lines, background tags
    base03: "gray", // unknown
    base04: "tomato", // color size object
    base05: colors.darkOne, // color undefined value
    base06: "gray", // unknown
    base07: state.themeName === "dark" ? colors.green : colors.darkOne, // color keys, brackets, arrows, arrays
    base08: colors.darkOne, // color Null value
    base09: state.themeName === "dark" ? colors.softWhite : colors.darkThree, // color String value
    base0A: "gray", // unknown
    base0B: colors.red, // color Float value
    base0C: colors.yellow, // color Object index
    base0D: state.themeName === "dark" ? colors.lightGray : colors.darkGray, // color Date value
    base0E: colors.softWhite, // color Boolean value
    base0F: colors.blue, // color Int value
  };

  const currentTheme = state.themeName;

  return (
    <Container>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {data.length === 0 || data === undefined || data === null ? (
        <DisplayDefault width={120} height={120} fill={colors.softGray} />
      ) : (
        <JsonViewer
          value={data}
          theme={theme}
          enableClipboard={false}
          displayDataTypes={false}
          displayObjectSize={false}
          rootName={false}
          indentWidth={4}
          style={{
            width: "100%",
            height: "100%",
            overflowY: "auto",
            color: state.themeName === "dark" ? colors.green : colors.darkOne,
            // fontFamily: 'Inter',
            // fontSize: "0.875rem",
            borderRadius: "0.5rem",
            // padding: "0.5rem",
          }}
        />
      )}
    </Container>
  );
}

const DisplayDefault = ({ width, height }: DisplayDefaultProps) => {
  return (
    <DisplayContent>
      <TitleDisplay>There's nothing here...</TitleDisplay>
      <SvgIcon
        width={width}
        height={height}
        viewBox="0 0 121 120"
        // fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M116.304 35.1337C119.231 42.7723 120.667 51.2098 120.667 60C120.667 76.2456 115.761 91.2863 105.612 102.308C95.4128 113.383 80.2829 120 60.6666 120C41.0504 120 25.9205 113.383 15.7214 102.308C5.57203 91.2863 0.666626 76.2456 0.666626 60C0.666626 43.7544 5.57203 28.7135 15.7214 17.6923C25.9205 6.61725 41.0504 0 60.6666 0C71.1586 0 80.3669 1.89306 88.2242 5.34871C85.8769 6.91891 84.4928 9.65723 84.6892 12.536C77.9835 9.64099 69.9977 8.00059 60.6666 8.00059C42.9421 8.00059 30.0723 13.9193 21.6066 23.1121C13.0913 32.3588 8.66721 45.3177 8.66721 60C8.66721 74.6819 13.0913 87.6412 21.6066 96.8879C30.0723 106.081 42.9421 111.999 60.6666 111.999C78.3907 111.999 91.2609 106.081 99.7263 96.8879C108.242 87.6412 112.666 74.6819 112.666 60C112.666 51.7678 111.275 44.0776 108.552 37.2795L114.615 35.7636C115.213 35.6142 115.777 35.4012 116.304 35.1337Z"
          // fill={fill}
        />
        <path
          d="M21.8397 61.1761C23.402 59.614 25.9348 59.614 27.497 61.1761C28.065 61.7441 31.308 64.0047 36.6693 64.0047C42.0305 64.0047 45.2735 61.7441 45.8415 61.1761C47.4037 59.614 49.9366 59.614 51.4988 61.1761C53.0609 62.7382 53.0609 65.2712 51.4988 66.8333C49.3998 68.9323 44.109 72.0053 36.6693 72.0053C29.2296 72.0053 23.9386 68.9323 21.8397 66.8333C20.2775 65.2712 20.2775 62.7382 21.8397 61.1761Z"
          // fill={fill}
        />
        <path
          d="M69.8433 61.1761C71.4055 59.614 73.9384 59.614 75.5006 61.1761C76.0686 61.7441 79.3116 64.0047 84.6728 64.0047C90.034 64.0047 93.2771 61.7441 93.8451 61.1761C95.4072 59.614 97.9402 59.614 99.5023 61.1761C101.064 62.7382 101.064 65.2712 99.5023 66.8333C97.4034 68.9323 92.1126 72.0053 84.6728 72.0053C77.2331 72.0053 71.9423 68.9323 69.8433 66.8333C68.2812 65.2712 68.2812 62.7382 69.8433 61.1761Z"
          // fill={fill}
        />
        <path
          d="M52.6705 92.0067C52.6705 87.588 56.2524 84.0062 60.6711 84.0062C65.0898 84.0062 68.6717 87.588 68.6717 92.0067C68.6717 96.4255 65.0898 100.007 60.6711 100.007C56.2524 100.007 52.6705 96.4255 52.6705 92.0067Z"
          // fill={fill}
        />
        <path
          d="M112.252 9.78948C112.951 8.39217 112.772 6.71601 111.795 5.4974C110.817 4.27879 109.22 3.74075 107.704 4.11966L91.7032 8.11995C89.5598 8.65575 88.2565 10.8277 88.7926 12.971C89.3282 15.1143 91.5 16.4175 93.6433 15.8816L101.207 13.9908L93.0957 30.2133C92.3968 31.6106 92.5757 33.2868 93.5533 34.5054C94.5306 35.724 96.1283 36.2619 97.6436 35.8831L113.645 31.8828C115.788 31.347 117.091 29.1751 116.555 27.0317C116.02 24.8884 113.848 23.5853 111.705 24.1211L104.141 26.0119L112.252 9.78948Z"
          // fill={fill}
        />
        <path
          d="M74.672 20.0015C73.5675 20.0015 72.6719 20.897 72.6719 22.0016C72.6719 23.1063 73.5675 24.0018 74.672 24.0018H82.6726L73.0719 36.8027C72.6175 37.4087 72.5443 38.2196 72.8831 38.8973C73.2219 39.5749 73.9144 40.0029 74.672 40.0029H86.6729C87.7774 40.0029 88.673 39.1073 88.673 38.0028C88.673 36.8983 87.7774 36.0026 86.6729 36.0026H78.6723L88.273 23.2017C88.7275 22.5956 88.8007 21.7848 88.4618 21.1071C88.123 20.4295 87.4306 20.0015 86.6729 20.0015H74.672Z"
          // fill={fill}
        />
        <path
          d="M52.7734 29.3698C53.1226 28.3218 54.2555 27.7554 55.3032 28.1047L67.304 32.105C68.0525 32.3545 68.5841 33.0205 68.6622 33.8054C68.7398 34.5905 68.3489 35.3478 67.6641 35.7392L57.5469 41.5202L65.3039 44.106C66.352 44.4553 66.9184 45.5881 66.5692 46.6358C66.2196 47.6839 65.0871 48.2503 64.039 47.9011L52.0381 43.9008C51.2897 43.6512 50.758 42.9852 50.68 42.2003C50.6024 41.4154 50.9933 40.6578 51.6781 40.2666L61.7952 34.4854L54.0383 31.8998C52.9902 31.5504 52.4238 30.4177 52.7734 29.3698Z"
          // fill={fill}
        />
      </SvgIcon>
    </DisplayContent>
  );
};
