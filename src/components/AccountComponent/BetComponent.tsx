import styled from "styled-components";
import { IBet } from "../../store/betsStore";
import { useMemo, useState } from "react";
import { BetEventComponent } from "./BetEventComponent";

const StyledWrapper = styled.div`
  margin-bottom: 10px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.506);
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

const StyledWin = styled(StyledNumber)`
  color: #0000a7;
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

const StyledStatus = styled.p`
  font-weight: 500;
  span {
    padding: 3px 10px;
    border-radius: 10px;
    background-color: #0000a7;
    color: #fff;
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

  const date = useMemo(() => {
    return new Date(bet.createdAt);
  }, [bet.createdAt]);

  return (
    <StyledWrapper>
      <StyledHeader onClick={() => setOpened((p) => !p)}>
        <StyledDate>{date.toDateString()}</StyledDate>
        <StyledInfo>
          <StyledAmount>{bet.amount}$</StyledAmount>
          {/* <StyledOdd>{bet.odd}</StyledOdd> */}
          <StyledWin>{bet.win}$</StyledWin>
        </StyledInfo>
      </StyledHeader>
      {opened && (
        <StyledContent>
          {bet.events.map((e, i) => (
            <BetEventComponent number={i + 1} key={e._id} event={e} />
          ))}
          <StyledFooter>
            <StyledStatus>
              Status: <span>Active</span>
            </StyledStatus>
            <StyledTotal>{bet.odd}</StyledTotal>
          </StyledFooter>
        </StyledContent>
      )}
    </StyledWrapper>
  );
};
