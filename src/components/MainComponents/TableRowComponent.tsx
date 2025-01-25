import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { ticketStore } from "../../store/ticketStore";
import { IEvent } from "../../store/eventsStore";
import { formatDate } from "../../utils/formatDate";

const StyledRow = styled.div`
  display: flex;
  color: #181818;
  background-color: #f2f2f2;
  border-bottom: 1px solid #c4c4c4;
  &:hover {
    background-color: #e0e0e0;
  }
  &:last-child {
    border: 0;
  }
`;

const RowItem = styled.div<{ $activeRow?: boolean }>`
  height: 30px;
  width: 40px;
  padding: 2px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  ${({ $activeRow }) => $activeRow && "background-color: #fde054;"}
  &:hover {
    background-color: #fde054;
  }
`;

const RowItemDisabled = styled(RowItem)`
  cursor: default;
  &:hover {
    background-color: inherit;
  }
`;

interface IProps {
  event: IEvent;
}

export const TableRowComponent = observer(({ event }: IProps) => {
  const ticketEvent = ticketStore.events.find((ev) => ev.eventId === event.id);
  return (
    <StyledRow>
      <RowItemDisabled style={{ width: "135px", justifyContent: "flex-start" }}>
        {formatDate(new Date(event.commence_time).toISOString())}
      </RowItemDisabled>
      <RowItemDisabled style={{ width: "auto", marginRight: "auto" }}>
        {event.title}
      </RowItemDisabled>
      <RowItem
        onClick={() => ticketStore.addEvent(event.id, "win1")}
        $activeRow={ticketEvent?.place === "win1"}
      >
        {event.odds.win1}
      </RowItem>
      <RowItem
        onClick={() => ticketStore.addEvent(event.id, "draw")}
        $activeRow={ticketEvent?.place === "draw"}
      >
        {event.odds.draw}
      </RowItem>
      <RowItem
        onClick={() => ticketStore.addEvent(event.id, "win2")}
        $activeRow={ticketEvent?.place === "win2"}
      >
        {event.odds.win2}
      </RowItem>
    </StyledRow>
  );
});
