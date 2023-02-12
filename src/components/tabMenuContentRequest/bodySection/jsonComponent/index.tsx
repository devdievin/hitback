import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBodyData } from "../../../../redux/request/requestActions";
import { Container, TextAreaJson } from "./styles";

export default function JsonComponent() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { bodyData } = useSelector(
    (rootReducer: any) => rootReducer.requestReducer
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    console.log(value);

    let aux = "";
    if (value.indexOf("{") !== -1) {
      aux = `{\n  "key":`;
      // const ind = value.indexOf(':');
    } else {
      aux += value;
    }

    console.log(aux);
    // setBody(value);
    dispatch(setBodyData(aux));
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log(e);

    switch (true) {
      case e.key === "Backspace":
        setText(text.slice(0, text.length - 1));
        break;
      case e.key === " ":
        setText((prevInput) => prevInput + " ");
        break;
      case e.key === "Tab":
        setText((prevInput) => prevInput + "  ");
        break;
      case e.key === "Enter":
        setText((prevInput) => prevInput + "\n");
        break;
      case e.key === "{":
        setText((prevInput) => prevInput + '{\n  "');
        break;
      case e.key === "[":
        setText((prevInput) => prevInput + "[\n  {");
        break;
      case e.key === '"':
        setText((prevInput) => prevInput + '"');
        break;
      case e.key === ",":
        setText((prevInput) => prevInput + ",\n  ");
        break;
      case e.shiftKey && e.key === ":":
        setText((prevInput) => prevInput + ': "');
        break;
      case e.key === "@":
        setText((prevInput) => prevInput + "@");
        break;
      case e.shiftKey:
        break;
      default:
        setText((prevInput) => prevInput + e.key);
        break;
    }

    // const isLetterOrNumber = /[a-zA-Z0-9]/.test(e.key);
    // if (e.key === "Backspace") {
    //   setText(text.slice(0, text.length - 1));
    // } else if (e.key === " ") {
    //   setText((prevInput) => prevInput + " ");
    // } else if (e.key === "Enter") {
    //   setText((prevInput) => prevInput + "\n");
    // } else if (isLetterOrNumber) {
    //   console.log("letter");

    //   setText((prevInput) => prevInput + e.key);
    // }

    // dispatch(setBodyData(text));
  };

  // const indentJson = (text: string) => {
  //   return JSON.stringify(JSON.parse(text), null, 2);
  // };

  return (
    <Container>
      {/* JSON Here... */}
      <TextAreaJson
        name="test"
        value={text}
        autoComplete={"off"}
        placeholder={"{...}"}
        // onChange={handleChange}
        onKeyDown={handleKey}
        ref={textareaRef}
      />
    </Container>
  );
}
