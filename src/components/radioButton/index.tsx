import { Styles, Wrapper } from "./styles";

type RadioButtonProps = {
  id: string;
  name: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export default function RadioButton({
  id,
  name,
  label,
  checked,
  disabled,
  onClick,
}: RadioButtonProps) {
  return (
    <Wrapper>
      <Styles.Radio
        type="radio"
        id={id}
        name={name}
        checked={checked}
        disabled={disabled}
        onClick={onClick}
      />
      <Styles.Label htmlFor={id}>{label}</Styles.Label>
    </Wrapper>
  );
}
