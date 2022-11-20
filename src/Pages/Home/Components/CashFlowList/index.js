import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../../../Context/AuthContext";
import Balance from "./Balance";
import CashFlowItem from "./CashFlowItem";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  height: 100%;
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  padding: 25px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function CashFlowList() {
  const userContext = useContext(AuthContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const response = axios.get("http://localhost:5000/cashflow/all", {
      headers: {
        user: userContext.user,
      },
    });

    response.then(({ data }) => {
      setItems(data);
    });
  }, []);

  return (
    <Container>
      <List>
        {items.map(({ value, description, type }) => (
          <CashFlowItem value={value} description={description} type={type} />
        ))}
      </List>
      <Balance items={items} />
    </Container>
  );
}
