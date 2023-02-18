import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BodyTypes } from "../../../enums/BodyTypes";
// import { ContentTypes } from "../../../enums/ContentTypes";
import {
  setBodyData,
  setBodyType,
  setHitbackHeaders,
} from "../../../redux/request/requestActions";

// Components
import RadioButton from "../../radioButton";
import JsonComponent from "./jsonComponent";
import NoneComponent from "./noneComponent";
import PlainTextComponent from "./plainTextComponent";

// Styles
import { Container, InputGroup } from "./styles";

export default function BodySection() {
  const dispatch = useDispatch();
  const { bodyType, requestHeaders } = useSelector(
    (rootReducer: any) => rootReducer.requestReducer
  );

  const element = useMemo(() => {
    switch (bodyType) {
      case BodyTypes.NONE:
        return <NoneComponent />;
      case BodyTypes.JSON:
        return <JsonComponent />;
      case BodyTypes.PLAIN:
        return <PlainTextComponent />;
    }
  }, [bodyType]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(setBodyData(""));

    dispatch(setBodyType(value));

    switch (value) {
      case BodyTypes.NONE:
        dispatch(
          setHitbackHeaders({
            ...requestHeaders,
            "Content-Type": null,
          })
        );
        break;
      case BodyTypes.JSON:
        dispatch(
          setHitbackHeaders({
            ...requestHeaders,
            "Content-Type": "application/json",
          })
        );
        break;
      case BodyTypes.PLAIN:
        dispatch(
          setHitbackHeaders({
            ...requestHeaders,
            "Content-Type": "text/plain",
          })
        );
        break;
    }
  };

  return (
    <Container>
      <InputGroup>
        <RadioButton
          id="radio1"
          name="bodyTypeRadio"
          label={BodyTypes.NONE}
          value={BodyTypes.NONE}
          checked={bodyType === BodyTypes.NONE}
          onChange={handleChange}
        />
        <RadioButton
          id="radio2"
          name="bodyTypeRadio"
          label={BodyTypes.JSON}
          value={BodyTypes.JSON}
          checked={bodyType === BodyTypes.JSON}
          onChange={handleChange}
        />
        {/* <RadioButton
          id="radio3"
          name="bodyTypeRadio"
          label={BodyTypes.PLAIN}
          value={BodyTypes.PLAIN}
          checked={bodyType === BodyTypes.PLAIN}
          onChange={handleChange}
        /> */}
      </InputGroup>

      {element}
    </Container>
  );
}
