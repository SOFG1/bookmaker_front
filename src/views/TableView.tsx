import { useEffect } from "react";
import styled from "styled-components";
import { eventsStore } from "../store/eventsStore";
import { observer } from "mobx-react-lite";
import { ticketStore } from "../store/ticketStore";

const Wrapper = styled.div`
  font-size: 14px;
  font-weight: 500;
  max-width: calc(100vw - (100vw - 1500px) / 2 - 400px);
`;

const StyledHeader = styled.div`
  display: flex;
  background-color: #424242;
  color: #ccc;
  font-weight: 600;
`;

const HeaderItem = styled.div`
  height: 30px;
  width: 40px;
  padding: 2px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderName = styled(HeaderItem)`
  justify-content: flex-start;
  width: auto;
  flex-grow: 1;
`;

const Box = styled.div``;

const Row = styled.div`
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

const StyledLoader = styled.p`
  color: #fff;
  margin: 30px;
`;

export const TableView = observer(() => {
  useEffect(() => {
    eventsStore.getEvents();
  }, []);

  if (eventsStore.isFetching) {
    return <StyledLoader>Loading...</StyledLoader>;
  }

  return (
    <Wrapper>
      <StyledHeader>
        <HeaderName>Bundesliga, Germany</HeaderName>
        <HeaderItem>1</HeaderItem>
        <HeaderItem>X</HeaderItem>
        <HeaderItem>2</HeaderItem>
      </StyledHeader>
      <Box>
        {eventsStore.events.map((e) => {
          const date = new Date(e.commence_time);
          const ticketEvent = ticketStore.events.find(
            (ev) => ev.eventId === e.id
          );
          return (
            <Row key={e.id}>
              <RowItemDisabled
                style={{ width: "130px", justifyContent: "flex-start" }}
              >
                {date.toDateString()}
              </RowItemDisabled>
              <RowItemDisabled style={{ width: "auto", marginRight: "auto" }}>
                {e.title}
              </RowItemDisabled>
              <RowItem
                onClick={() =>
                  ticketStore.addEvent(e.id, "win1", e.odds["win1"])
                }
                $activeRow={ticketEvent?.place === "win1"}
              >
                {e.odds.win1}
              </RowItem>
              <RowItem
                onClick={() =>
                  ticketStore.addEvent(e.id, "draw", e.odds["draw"])
                }
                $activeRow={ticketEvent?.place === "draw"}
              >
                {e.odds.draw}
              </RowItem>
              <RowItem
                onClick={() =>
                  ticketStore.addEvent(e.id, "win2", e.odds["win2"])
                }
                $activeRow={ticketEvent?.place === "win2"}
              >
                {e.odds.win2}
              </RowItem>
            </Row>
          );
        })}
      </Box>
    </Wrapper>
  );
});
