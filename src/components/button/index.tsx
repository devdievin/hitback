import { Styles } from "./styles";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
};

export default function Button({ type, text, onClick }: ButtonProps) {
  return (
    <Styles.Button type={type} onClick={onClick}>
      {text}
    </Styles.Button>
  );
}
