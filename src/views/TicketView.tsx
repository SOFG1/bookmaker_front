import styled from "styled-components";
import { TicketEventComponent } from "../components/TicketEventComponent";

const StyledWrapper = styled.div`
  background-color: #fde054;
  width: 350px;
  position: fixed;
  right: 20px;
  top: 71px;
  border: 1px solid #2e2e2e;
`;

const StyledHeader = styled.div`
  background-color: #2e2e2e;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const StyledTitle = styled.p`
  color: #3dce33;
  font-size: 18px;
  font-weight: 600;
`;

const StyledPlus = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 32px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px 0;
`;

const StyledControls = styled.div`
  padding: 0 10px;
  width: 100%;
`;

const StyledTotal = styled.p`
  margin: 30px 0 10px;
`;

const StyledWin = styled.p`
  margin: 5px 0 5px;
  span {
    font-weight: 700;
  }
`;

const StyledBtn = styled.button`
  width: 100%;
  background-color: #29b21f;
  color: #fff;
  text-align: center;
  padding: 8px 15px;
  font-size: 20px;
  font-weight: 700;
  border: 0;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background-color: #3bc931;
  }
  margin-bottom: 15px;
`;

const ClearBtn = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-bottom: 7px;
  text-decoration: underline;
  cursor: pointer;
`;

export const TicketView = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledTitle>My bets</StyledTitle>
        <StyledPlus>+</StyledPlus>
      </StyledHeader>
      <StyledContent>
        <div style={{width: "100%"}}>
          <TicketEventComponent />
          <TicketEventComponent />
          <TicketEventComponent />
          <TicketEventComponent />
          <TicketEventComponent />
          <TicketEventComponent />
        </div>
        <StyledControls>
          <StyledTotal>Odds: 26.43</StyledTotal>
          <div>
            <input type="number" placeholder="Amount" /> <span>$</span>
          </div>
          <StyledWin>
            Possible win: <span>352,60</span>
          </StyledWin>
          <StyledBtn>Place bet</StyledBtn>
          <ClearBtn>clear</ClearBtn>
        </StyledControls>
      </StyledContent>
    </StyledWrapper>
  );
};
