import { useDispatch, useSelector } from "react-redux";
import { useThemeContext } from "../../../../hooks/useThemeContext";
import { setBodyData } from "../../../../redux/request/requestActions";

// Components
import CodeEditorComponent from "../../../codeEditor";

// Styles
import { Container } from "./styles";

export default function PlainTextComponent() {
  const { state } = useThemeContext();

  const dispatch = useDispatch();

  const { bodyData } = useSelector(
    (rootReducer: any) => rootReducer.requestReducer
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    console.log(value);
    dispatch(setBodyData(value));
  };
  return (
    <Container>
      <CodeEditorComponent
        value={bodyData}
        language={"plaintext"}
        placeholder={"Please enter Plain Text."}
        theme={state.themeName as "dark" | "light"}
        onChange={handleChange}
      />
    </Container>
  );
}
