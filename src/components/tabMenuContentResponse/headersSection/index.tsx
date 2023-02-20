import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../redux/rootReducer";

// Components
import DisplayEmpty from "../../displayEmpty";

// Styles
import { colors } from "../../../styles/colors";
import { Container, Key, Row, Value } from "./styles";

export default function HeadersSection() {
  const { headers } = useSelector(
    (rootReducer: RootReducer) => rootReducer.requestReducer
  );

  const data = useMemo(() => {
    return Object.entries(headers);
  }, [headers]);

  // console.log(data);

  const key = 0;
  const value = 1;

  return (
    <Container>
      {data.length > 0 ? (
        data.map((item, index) => {
          return (
            <Row key={index}>
              <Key>{item[key]}</Key>
              <Value>{item[value]}</Value>
            </Row>
          );
        })
      ) : (
        <DisplayEmpty width={120} height={120} fill={colors.softGray} />
      )}
    </Container>
  );
}
