import { Label, Radio, Wrapper } from "./styles";

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
      <Radio
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onClick={onClick}
        onChange={onChange}
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
}
