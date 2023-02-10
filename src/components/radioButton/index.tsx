import { Styles, Wrapper } from "./styles";

type RadioButtonProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RadioButton({
  id,
  name,
  label,
  value,
  checked,
  disabled,
  onClick,
  onChange,
}: RadioButtonProps) {
  return (
    <Wrapper>
      <Styles.Radio
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onClick={onClick}
        onChange={onChange}
      />
      <Styles.Label htmlFor={id}>{label}</Styles.Label>
    </Wrapper>
  );
}
