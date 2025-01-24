import styled from "styled-components";
import { IBet } from "../store/betsStore";
import { useMemo, useState } from "react";
import { TicketEventComponent } from "./TicketEventComponent";

const StyledWrapper = styled.div`
  margin-bottom: 10px;
`;

const StyledHeader = styled.div`
  padding: 15px;
  background-color: #ffffff81;
  cursor: pointer;
  &:hover {
    background-color: #ffffffbe;
  }
`;

const StyledContent = styled.div`
  padding: 20px;
  margin: 0 25px;
  background-color: #fde054;
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
        {date.toDateString()}
      </StyledHeader>
      {opened && (
        <StyledContent>
         {bet.events.map((e, i) => <TicketEventComponent key={e._id} number={i + 1} eventId={e._id} place={e.place} />)}
        </StyledContent>
      )}
    </StyledWrapper>
  );
};
