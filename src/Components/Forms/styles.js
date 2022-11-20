import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ErrorLabel = styled.label``;

export const SubmitButton = styled.button`
  background: #a328d6;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  padding: 12px;
  border: none;
`;
