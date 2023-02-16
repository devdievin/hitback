import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Styles
import { Container, Item, Key, Value } from "./styles";

type HeadersArray = [key: string, value: string][];

export default function HeadersSection() {
  const [headersList, setHeadersList] = useState<HeadersArray>([]);

  const { requestHeaders } = useSelector(
    (rootReducer: any) => rootReducer.requestReducer
  );

  const key = 0;
  const value = 1;

  useEffect(() => {
    console.log("change Headers");
    const content_header = Object.entries(requestHeaders).filter(
      (header) => header[key] === "contentType" && header[value] !== undefined
    );
    setHeadersList(content_header as HeadersArray);
  }, [requestHeaders]);

  return (
    <Container>
      {headersList.length > 0 ? (
        headersList.map((item, index) => (
          <Item key={index}>
            <Key>{item[key]}</Key>
            <Value>{item[value]}</Value>
          </Item>
        ))
      ) : (
        <div>No headers...</div>
      )}
    </Container>
  );
}
