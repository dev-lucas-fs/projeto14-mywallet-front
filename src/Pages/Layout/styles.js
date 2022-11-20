import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
  background-color: #8c11be;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 960px) {
    width: 415px;
    height: 90%;
    border-radius: 5px;
  }
`;
