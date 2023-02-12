import { ButtonComponent } from "./styles";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
};

export default function Button({ type, text, onClick }: ButtonProps) {
  return (
    <ButtonComponent type={type} onClick={onClick}>
      {text}
    </ButtonComponent>
  );
}
