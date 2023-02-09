import { useState } from "react";

// Components
import RadioButton from "../../radioButton";
import JsonComponent from "./jsonComponent";
import NoneComponent from "./noneComponent";
import PlainTextComponent from "./plainTextComponent";

// Styles
import { Styles } from "./styles";

export default function BodySection() {
  const [element, setElement] = useState<JSX.Element>(<NoneComponent />);

  const toggleBody = (el: JSX.Element) => {
    setElement(el);
  };

  return (
    <Styles.Container>
      {/* <p>Body content here...</p> */}
      <form style={{ display: "flex", gap: "1rem" }}>
        <RadioButton
          id="radio1"
          name="test"
          label="none"
          onClick={() => toggleBody(<NoneComponent />)}
        />
        <RadioButton
          id="radio2"
          name="test"
          label="JSON"
          onClick={() => toggleBody(<JsonComponent />)}
        />
        <RadioButton
          id="radio3"
          name="test"
          label="Plain text"
          onClick={() => toggleBody(<PlainTextComponent />)}
        />
      </form>

      {element}
    </Styles.Container>
  );
}
