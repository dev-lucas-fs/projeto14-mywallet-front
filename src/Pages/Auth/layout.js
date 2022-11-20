import styled from "styled-components";
import Logo from "../../Components/Logo";
import Layout from "../Layout";

const Container = styled.div`
  gap: 30px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function LayoutAuth({ children }) {
  return (
    <Layout>
      <Container>
        <Logo />
        {children}
      </Container>
    </Layout>
  );
}
