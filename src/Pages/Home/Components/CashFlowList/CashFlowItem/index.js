import styled from "styled-components";
import dayjs from "dayjs";

const Container = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Date = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #c6c6c6;
`;

const Description = styled.span`
  width: 100%;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  text-overflow: ellipsis;
`;

const Cash = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.type === "deposit" ? "#03AC00" : "#c70000")};
`;

export default function CashFlowItem({ date, description, value, type }) {
  return (
    <Container>
      <Date>{dayjs(date).format("DD/MM")}</Date>
      <Description>{description}</Description>
      <Cash type={type}>{parseFloat(value).toFixed(2)}</Cash>
    </Container>
  );
}
