import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HitbackHeaders, HitbackRequestHeaders } from "../../../types";
import { setHitbackHeaders } from "../../../redux/request/requestActions";

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
  const dispatch = useDispatch();
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
    // console.log(requestHeaders);
    // console.log("change Headers");
    const content_header = Object.entries(requestHeaders).filter(
      (header) => header[value] !== null && header[key] !== "Authorization"
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
    const { nameHeader, value } = newHeader;
    if (nameHeader !== "" && value !== "") {
      dispatch(
        setHitbackHeaders({
          ...requestHeaders,
          [nameHeader]: value,
        })
      );
      setNewHeader({ nameHeader: "", value: "" });
    }
  };

  const removeHeader = (key: string) => {
    const result = Object.entries(requestHeaders)
      .filter((item) => item[0] !== key)
      .reduce((result: HitbackHeaders, item) => {
        result[item[0]] = item[1];
        return result;
      }, {});
    dispatch(setHitbackHeaders(result as HitbackRequestHeaders));
  };

  return (
    <Container>
      {headersList.length > 0 &&
        headersList.map((item, index) => (
          <Item key={index}>
            <Key>{item[key]}</Key>
            <Value>{item[value]}</Value>
            <Button onClick={() => removeHeader(item[key])}>
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
