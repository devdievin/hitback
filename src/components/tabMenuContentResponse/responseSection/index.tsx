import { useSelector } from "react-redux";
import { useThemeContext } from "../../../hooks/useThemeContext";
import { JsonViewer, JsonViewerTheme } from "@textea/json-viewer";

// Components
import DisplayEmpty from "../../displayEmpty";

// Styles
import { colors } from "../../../styles/colors";
import { Container } from "./styles";

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
        <DisplayEmpty width={120} height={120} fill={colors.softGray} />
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
