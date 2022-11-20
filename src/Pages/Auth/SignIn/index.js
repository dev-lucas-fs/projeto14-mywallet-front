import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../../Components/Forms";
import LayoutAuth from "../layout";
import { AnchorContainer } from "../styles";
import { AuthContext } from "../../../Context/AuthContext";

export default function SignIn() {
  const [info, setInfo] = useState({
    email: {
      type: "email",
      placeholder: "Email",
      value: "lucas@gmail.com",
    },
    password: {
      type: "password",
      placeholder: "Senha",
      value: "1234544",
    },
  });
  const userContext = useContext(AuthContext);
  const navigate = useNavigate();
  function signIn(e) {
    e.preventDefault();

    const response = axios.post("http://localhost:5000/sign-in", {
      email: info.email.value,
      password: info.password.value,
    });

    response.then(({ data }) => {
      userContext.setUser(data.token);
      localStorage.setItem("user", data.token);
      navigate("/");
    });

    response.catch((err) => {
      alert("Não foi possível");
      console.log(err);
    });
  }

  return (
    <LayoutAuth>
      <Form
        info={{
          button: "Entrar",
          onSubmit: signIn,
          state: [info, setInfo],
        }}
      />
      <AnchorContainer>
        <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
      </AnchorContainer>
    </LayoutAuth>
  );
}
