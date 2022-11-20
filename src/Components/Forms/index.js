import Input from "./Input";
import { Container, InputGroup, SubmitButton } from "./styles";

export default function Form({ info }) {
  const [data, setData] = info.state;

  return (
    <Container onSubmit={(e) => info.onSubmit(e)}>
      {Object.keys(data).map((d) => (
        <InputGroup>
          <Input
            onChange={(e) => {
              setData((prev) => {
                const prevValue = prev;
                prevValue[d].value = e.target.value;
                return { ...prevValue };
              });
            }}
            placeholder={data[d].placeholder}
          />
        </InputGroup>
      ))}
      <SubmitButton>{info.button}</SubmitButton>
    </Container>
  );
}
