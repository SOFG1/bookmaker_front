import { useEffect } from "react";
import styled from "styled-components";
import { betsStore } from "../../store/betsStore";
import { observer } from "mobx-react-lite";
import { BetComponent } from "../../components/AccountComponent/BetComponent";

const StyledWrapper = styled.div`
  min-height: 600px;
`;

const StyledTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  color: #fff;
`

export const BetsView = observer(() => {
  useEffect(() => {
    betsStore.getBets();
  }, []);

  return (
    <StyledWrapper>
      <StyledTitle>Bets</StyledTitle>
      {betsStore.bets.map((b) => (
        <BetComponent bet={b} key={b._id!} />
      ))}
    </StyledWrapper>
  );
});
