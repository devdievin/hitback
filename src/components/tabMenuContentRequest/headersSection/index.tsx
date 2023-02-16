import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Components
import OkIcon from "../../svgIcon/okIcon";
import TrashIcon from "../../svgIcon/trashIcon";

// Styles
import { colors } from "../../../styles/colors";
import {
  Button,
  Container,
  HeaderGroup,
  Input,
  Item,
  Key,
  Value,
} from "./styles";

type HeadersArray = [key: string, value: string][];

type NewHeaderProps = {
  nameHeader: string;
  value: string;
};

export default function HeadersSection() {
  const [headersList, setHeadersList] = useState<HeadersArray>([]);
  const [newHeader, setNewHeader] = useState<NewHeaderProps>({
    nameHeader: "",
    value: "",
  });

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

  const handleHeaderName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHeader((prevState) => ({
      ...prevState,
      nameHeader: e.target.value,
    }));
  };

  const handleHeaderValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHeader((prevState) => ({
      ...prevState,
      value: e.target.value,
    }));
  };

  const saveNewHeader = () => {
    // console.log(headersList);
    if (newHeader.nameHeader !== "" && newHeader.value !== "") {
      setHeadersList((prevState) => [
        ...prevState,
        [newHeader.nameHeader, newHeader.value],
      ]);
      setNewHeader({ nameHeader: "", value: "" });
    }
  };

  const removeHeader = (ind: number) => {
    const result = headersList.filter((item, index) => index !== ind);
    setHeadersList(result);
  };

  return (
    <Container>
      {headersList.length > 0 &&
        headersList.map((item, index) => (
          <Item key={index}>
            <Key>{item[key]}</Key>
            <Value>{item[value]}</Value>
            <Button onClick={() => removeHeader(index)}>
              <TrashIcon width={17} height={19} fill={colors.darkGray} />
            </Button>
          </Item>
        ))}
      <HeaderGroup>
        <Input
          type={"text"}
          placeholder="header"
          value={newHeader.nameHeader}
          onChange={handleHeaderName}
        />
        <Input
          type={"text"}
          placeholder="value"
          value={newHeader.value}
          onChange={handleHeaderValue}
        />
        <Button onClick={saveNewHeader}>
          <OkIcon width={17} height={14} fill={colors.darkGray} />
        </Button>
      </HeaderGroup>
    </Container>
  );
}
