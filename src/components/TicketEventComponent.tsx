import styled from "styled-components";
import { EventOddType, eventsStore } from "../store/eventsStore";
import { useMemo } from "react";
import { observer } from "mobx-react-lite";
import { ticketStore } from "../store/ticketStore";

const PlaceTexts: {[key in EventOddType]: string} = {
  "win1": "1",
  "draw": "X",
  "win2": "2",
}

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  padding: 5px;
  border-bottom: 1px solid #aaa;
  &:last-child {
    border: 0;
  }
`;

const StyledNumber = styled.p`
  color: #837013;
`;

const StyledContent = styled.div`
  flex-grow: 1;
`;

const StyledName = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const StyledMarket = styled.p`
  font-size: 12px;
  color: #7d6c19;
  margin-bottom: 5px;
  font-weight: 600;
`;

const StyledValue = styled.p`
  color: #dc1a1a;
  font-size: 14px;
  font-weight: 600;
`;
const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledX = styled.p`
  transform: scaleX(1.25);
  color: #aaa;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
`;

const StyledOdd = styled.p`
  background-color: #9e860e;
  color: #fff;
  padding: 4px 6px;
  font-weight: 600;
  font-size: 13px;
  border-radius: 5px;
`;

interface IProps {
  number: number;
  eventId: string;
  place: EventOddType;
}

export const TicketEventComponent = observer(
  ({ number, eventId, place }: IProps) => {
    const event = useMemo(() => {
      return eventsStore.events.find(e => e.id === eventId)
    }, [eventsStore.events, eventId]);

    return (
      <StyledWrapper>
        <StyledNumber>{number}</StyledNumber>
        <StyledContent>
          <StyledName>{event?.title}</StyledName>
          <StyledMarket>Winner</StyledMarket>
          <StyledValue>{PlaceTexts[place]}</StyledValue>
        </StyledContent>
        <StyledRight>
          <StyledX onClick={() => ticketStore.removeEvent(eventId)}>X</StyledX>
          <StyledOdd>{event?.odds[place]}</StyledOdd>
        </StyledRight>
      </StyledWrapper>
    );
  }
);
