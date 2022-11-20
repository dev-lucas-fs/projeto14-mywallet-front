import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../../Components/Forms";
import { AuthContext } from "../../../../Context/AuthContext";
import { Tittle } from "../../styles";
import { Container } from "../styles";

export default function Outflow() {
  const [info, setInfo] = useState({
    value: {
      type: "number",
      placeholder: "Valor",
      value: "",
    },
    description: {
      type: "text",
      placeholder: "Descrição",
      value: "",
    },
  });
  const userContext = useContext(AuthContext);
  const navigate = useNavigate();
  function outflow(e) {
    e.preventDefault();
    const response = axios.post(
      "http://localhost:5000/cashflow/outflow",
      {
        value: info.value.value,
        description: info.description.value,
        type: "outflow",
        date: Date.now(),
      },
      {
        headers: {
          user: userContext.user,
        },
      }
    );

    response.then(() => {
      navigate("/");
    });

    response.catch((err) => {
      console.log(err);
    });
  }
  return (
    <Container>
      <Tittle>Nova saída</Tittle>
      <Form
        info={{
          button: "Salvar saída",
          onSubmit: outflow,
          state: [info, setInfo],
        }}
      />
    </Container>
  );
}
