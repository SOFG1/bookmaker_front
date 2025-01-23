import { useEffect } from "react";
import styled from "styled-components";
import { eventsStore } from "../store/eventsStore";

const Wrapper = styled.div`
  font-size: 14px;
  font-weight: 500;
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
  border-bottom: 1px solid #C4C4C4;
  &:hover {
    background-color: #e0e0e0;
  }
  &:last-child {
    border: 0;
  }
`;

const RowItem = styled.div`
  height: 30px;
  width: 40px;
  padding: 2px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
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

export const TableView = () => {
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
          return (
            <Row key={e.id}>
              <RowItemDisabled style={{ width: "auto" }}>
                {e.commence_time}
              </RowItemDisabled>
              <RowItemDisabled style={{ width: "auto", marginRight: "auto" }}>
                {e.title}
              </RowItemDisabled>
              <RowItem>{e.odds.win1}</RowItem>
              <RowItem>{e.odds.draw}</RowItem>
              <RowItem>{e.odds.win2}</RowItem>
            </Row>
          );
        })}
      </Box>
    </Wrapper>
  );
};
