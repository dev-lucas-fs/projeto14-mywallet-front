import { AddCircleOutline, RemoveCircleOutline } from "react-ionicons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  gap: 30px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  background: #a328d6;
  border-radius: 5px;
  color: #ffffff;
`;

export default function Button({ type, onClick }) {
  return (
    <Container onClick={onClick}>
      {type === "add" ? (
        <>
          <AddCircleOutline
            style={{ width: "30px", height: "30px", color: "#fff" }}
          />
          <span>
            Nova
            <br />
            entrada
          </span>
        </>
      ) : (
        <>
          <RemoveCircleOutline
            style={{ width: "30px", height: "30px", color: "#fff" }}
          />
          <span>
            Nova
            <br />
            saída
          </span>
        </>
      )}
    </Container>
  );
}
