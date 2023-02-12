import { useDispatch, useSelector } from "react-redux";
import { setBodyData } from "../../../../redux/request/requestActions";
import { useThemeContext } from "../../../../hooks/useThemeContext";

// Components
import CodeEditorComponent from "../../../codeEditor";

// Styles
import { Container } from "./styles";

export default function JsonComponent() {
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
        language={"json"}
        placeholder={"Please enter JSON code."}
        theme={state.themeName as "dark" | "light"}
        onChange={handleChange}
      />
    </Container>
  );
}
