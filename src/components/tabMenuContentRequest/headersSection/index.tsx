import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ContentTypes } from "../../../enums/ContentTypes";

// Styles
import { Container, Item, Key, Value } from "./styles";

export default function HeadersSection() {
  const { requestHeaders } = useSelector(
    (rootReducer: any) => rootReducer.requestReducer
  );

  //   headers.setContentType(ContentTypes.Application_JSON);
  // console.log(requestHeaders);

  const data = useMemo(() => {
    return Object.entries(requestHeaders as [string, string]);
  }, [requestHeaders]);

  const key = 0;
  const value = 1;

  return (
    <Container>
      {data.length > 0 &&
        data.map((item, index) => (
          <Item key={index}>
            <Key>{item[key]}</Key>
            <Value>{item[value]}</Value>
          </Item>
        ))}
    </Container>
  );
}
