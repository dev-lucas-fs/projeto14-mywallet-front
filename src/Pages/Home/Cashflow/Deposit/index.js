import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../../Components/Forms";
import { Tittle } from "../../styles";
import { Container } from "../styles";
import { AuthContext } from "../../../../Context/AuthContext";
import dayjs from "dayjs";

export default function Deposit() {
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
  function deposit(e) {
    e.preventDefault();
    const response = axios.post(
      "http://localhost:5000/cashflow/deposit",
      {
        value: info.value.value,
        description: info.description.value,
        type: "deposit",
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
      <Tittle>Nova entrada</Tittle>
      <Form
        info={{
          button: "Salvar entrada",
          onSubmit: deposit,
          state: [info, setInfo],
        }}
      />
    </Container>
  );
}
