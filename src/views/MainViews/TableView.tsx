import { useEffect } from "react";
import styled from "styled-components";
import { eventsStore } from "../../store/eventsStore";
import { observer } from "mobx-react-lite";
import { TableRowComponent } from "../../components/MainComponents/TableRowComponent";

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
          return <TableRowComponent key={e.id} event={e} />;
        })}
      </Box>
    </Wrapper>
  );
});
