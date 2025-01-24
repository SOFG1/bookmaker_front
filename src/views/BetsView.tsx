import { useEffect } from "react";
import styled from "styled-components";
import { betsStore } from "../store/betsStore";
import { observer } from "mobx-react-lite";
import { BetComponent } from "../components/BetComponent";

const StyledWrapper = styled.div`
  min-height: 700px;
`;

export const BetsView = observer(() => {
  useEffect(() => {
    betsStore.getBets();
  }, []);

  return (
    <StyledWrapper>
      {betsStore.bets.map((b) => (
        <BetComponent bet={b} key={b._id!} />
      ))}
    </StyledWrapper>
  );
});
