import styled from "styled-components";
import { TableView } from "../views/MainViews/TableView";
import { TicketView } from "../views/MainViews/TicketView";

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 25px;
  color: #fde054;
`;

export const MainPage = () => {
  return (
    <div className="container">
      <TicketView />
      <Title>Top matches</Title>
      <TableView />
    </div>
  );
};
