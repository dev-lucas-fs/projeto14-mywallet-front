import { Container } from "./styles";

export default function Input({ placeholder, onChange, type = "text" }) {
  return (
    <Container placeholder={placeholder} onChange={onChange} type={type} />
  );
}
