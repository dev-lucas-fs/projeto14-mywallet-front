import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LogOutOutline } from "react-ionicons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../../../Context/AuthContext";
import { Tittle } from "../../styles";

const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Header() {
  const userContext = useContext(AuthContext);
  const [name, setName] = useState("Fulano");
  const navigate = useNavigate();

  function logout() {
    userContext.setUser("");
    localStorage.user = "";
    navigate("/sign-in");
  }

  useEffect(() => {
    const response = axios.get("http://localhost:5000/user", {
      headers: {
        user: userContext.user,
      },
    });

    response.then(({ data }) => {
      setName(data.name);
    });
  }, [name]);

  return (
    <Container>
      <Tittle>Olá, {name}</Tittle>
      <LogOutOutline
        onClick={() => logout()}
        style={{
          color: "#fff",
          width: "30px",
          height: "30px",
        }}
      />
    </Container>
  );
}
