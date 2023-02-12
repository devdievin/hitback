import { FieldValues, UseFormRegister } from "react-hook-form";

// Styles
import { InputComponent } from "./styles";

type InputProps = {
  type: React.HTMLInputTypeAttribute;
  name: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type,
  name,
  value,
  placeholder,
  disabled,
  required,
  register,
  onChange,
}: InputProps) {
  return (
    <InputComponent
      {...register(name)}
      type={type}
      value={value}
      placeholder={placeholder}
      autoComplete={"off"}
      onChange={onChange}
      disabled={disabled}
      required={required}
    />
  );
}
