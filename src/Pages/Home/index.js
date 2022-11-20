import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container as Layout } from "../Layout/styles";
import Button from "./Components/Button";
import CashFlowList from "./Components/CashFlowList";
import Header from "./Components/Header";
import { ButtonGroup } from "./styles";

const Container = styled(Layout)`
  gap: 30px;
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <CashFlowList />
      <ButtonGroup>
        <Button type="add" onClick={() => navigate("/deposit")} />
        <Button onClick={() => navigate("/outflow")} />
      </ButtonGroup>
    </Container>
  );
}
