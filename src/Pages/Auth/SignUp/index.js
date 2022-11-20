import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../../Components/Forms";
import LayoutAuth from "../layout";
import { AnchorContainer } from "../styles";

export default function SignIn() {
  const [info, setInfo] = useState({
    name: {
      type: "text",
      placeholder: "Nome",
      value: "",
    },
    email: {
      type: "email",
      placeholder: "Email",
      value: "",
    },
    password: {
      type: "password",
      placeholder: "Senha",
      value: "",
    },
    repeatPassword: {
      type: "password",
      placeholder: "Confirme a Senha",
      value: "",
    },
  });
  const navigate = useNavigate();
  function signUp(e) {
    e.preventDefault();
    const response = axios.post("http://localhost:5000/sign-up", {
      name: info.name.value,
      email: info.email.value,
      password: info.password.value,
      repeatPassword: info.repeatPassword.value,
    });

    response.then(() => {
      navigate("/sign-in");
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
          button: "Cadastrar",
          onSubmit: signUp,
          state: [info, setInfo],
        }}
      />
      <AnchorContainer>
        <Link to="/sign-in">Já possui uma conta?</Link>
      </AnchorContainer>
    </LayoutAuth>
  );
}
