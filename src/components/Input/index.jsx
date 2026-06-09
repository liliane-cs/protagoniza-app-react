import { InputEstilizado } from "./style";

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <InputEstilizado
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}