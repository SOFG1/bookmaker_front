import styled from "styled-components";
import { IBet } from "../../store/betsStore";
import { useState } from "react";
import { BetEventComponent } from "./BetEventComponent";
import { formatDate } from "../../utils/formatDate";

const StyledWrapper = styled.div`
  margin-bottom: 10px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.575);
  }
`;

const StyledDate = styled.p`
  color: #fff;
  font-weight: 500;
  text-shadow: 1px 1px 2px #000;
`;

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledNumber = styled.p`
  min-width: 80px;
  text-align: right;
`;

const StyledAmount = styled(StyledNumber)`
  text-align: left;
  font-weight: 600;
`;

const StyledWin = styled(StyledNumber)<{ $status: string }>`
  color: #0000a7;
  ${({ $status }) => $status === "lost" && "color: #b60000aa;"}
  ${({ $status }) => $status === "won" && "color: #0b940b;"}
`;

const StyledContent = styled.div`
  padding: 20px;
  margin: 0 25px;
  background-color: #fde054;
`;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-right: 5px;
`;

const StyledStatus = styled.p<{ $status: string }>`
  font-weight: 500;
  span {
    padding: 3px 10px;
    border-radius: 10px;
    background-color: #0000a7;
    color: #fff;
    ${({ $status }) => $status === "lost" && "background-color: red;"}
    ${({ $status }) => $status === "won" && "background-color: #00c400;"}
    margin-left: 20px;
  }
`;

const StyledTotal = styled.p`
  background-color: #9e860e;
  color: #fff;
  padding: 4px 6px;
  font-weight: 600;
  font-size: 13px;
  border-radius: 5px;
  margin-left: auto;
`;

interface IProps {
  bet: IBet;
}

export const BetComponent = ({ bet }: IProps) => {
  const [opened, setOpened] = useState(false);
  return (
    <StyledWrapper>
      <StyledHeader onClick={() => setOpened((p) => !p)}>
        <StyledDate>{formatDate(bet.createdAt)}</StyledDate>
        <StyledInfo>
          <StyledAmount>{bet.amount}$</StyledAmount>
          {/* <StyledOdd>{bet.odd}</StyledOdd> */}
          <StyledWin $status={bet.status}>{bet.win}$</StyledWin>
        </StyledInfo>
      </StyledHeader>
      {opened && (
        <StyledContent>
          {bet.events.map((e, i) => (
            <BetEventComponent number={i + 1} key={e._id} event={e} />
          ))}
          <StyledFooter>
            <StyledStatus $status={bet.status}>
              Status: <span>{bet.status}</span>
            </StyledStatus>
            <StyledTotal>{bet.odd}</StyledTotal>
          </StyledFooter>
        </StyledContent>
      )}
    </StyledWrapper>
  );
};
