import styled from "styled-components";
import { TableView } from "../views/TableView";

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 25px;
  color: #fde054;
`;

export const MainPage = () => {
  return (
    <div className="container">
      <Title>Top matches</Title>
      <TableView />
      <TableView />
      <TableView />
      <TableView />
    </div>
  );
};
