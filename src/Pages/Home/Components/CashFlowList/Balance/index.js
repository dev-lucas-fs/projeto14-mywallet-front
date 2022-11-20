import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  color: #000000;
`;

const Value = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  color: ${(props) => (props.positive ? "#03ac00" : "#C70000")};
`;

export default function Balance({ items }) {
  const [value, setValues] = useState(
    items.reduce(
      (prev, acc) =>
        prev +
        (acc.type === "deposit"
          ? parseFloat(acc.value)
          : -parseFloat(acc.value)),

      0
    )
  );

  useEffect(() => {
    setValues(
      items.reduce(
        (prev, acc) =>
          prev +
          (acc.type === "deposit"
            ? parseFloat(acc.value)
            : -parseFloat(acc.value)),

        0
      )
    );
  }, [items]);

  return (
    <Container>
      SALDO <Value positive={value > 0}>{value}</Value>
    </Container>
  );
}
