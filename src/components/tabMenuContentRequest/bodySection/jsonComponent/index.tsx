import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBodyData } from "../../../../redux/request/requestActions";
import { Container, TextAreaJson } from "./styles";

export default function JsonComponent() {
  const dispatch = useDispatch();
  // const [body, setBody] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { bodyData } = useSelector(
    (rootReducer: any) => rootReducer.requestReducer
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    // setBody(value);
    dispatch(setBodyData(value));
  };

  // const indentJson = (text: string) => {
  //   return JSON.stringify(JSON.parse(text), null, 2);
  // };

  return (
    <Container>
      {/* JSON Here... */}
      <TextAreaJson
        name="test"
        value={bodyData}
        autoComplete={"off"}
        placeholder={"{...}"}
        onChange={handleChange}
        ref={textareaRef}
      />
    </Container>
  );
}
