import styled from "styled-components";

const data = [
  {
    "1": 1.6,
    "2": 5.9,
    "12": 1.2,
    id: 1,
    date: "21:45",
    name: "Barcelona - Real Madrid",
    X: 3.7,
    "1X": 1.15,
    X2: 2,
    "(0)1": 1.23,
    "(0)2": 3.5,
    "2.5 over": 2.2,
    "2.5 under": 1.55,
    yes: 1.6,
    no: 2.1,
  },
  {
    "1": 1.6,
    "2": 5.9,
    "12": 1.2,
    id: 2,
    date: "21:45",
    name: "Barcelona - Real Madrid",
    X: 3.7,
    "1X": 1.15,
    X2: 2,
    "(0)1": 1.23,
    "(0)2": 3.5,
    "2.5 over": 2.2,
    "2.5 under": 1.55,
    yes: 1.6,
    no: 2.1,
  },
  {
    "1": 1.6,
    "2": 5.9,
    "12": 1.2,
    id: 3,
    date: "21:45",
    name: "Barcelona - Real Madrid",
    X: 3.7,
    "1X": 1.15,
    X2: 2,
    "(0)1": 1.23,
    "(0)2": 3.5,
    "2.5 over": 2.2,
    "2.5 under": 1.55,
    yes: 1.6,
    no: 2.1,
  },
  {
    "1": 1.6,
    "2": 5.9,
    "12": 1.2,
    id: 4,
    date: "21:45",
    name: "Barcelona - Real Madrid",
    X: 3.7,
    "1X": 1.15,
    X2: 2,
    "(0)1": 1.23,
    "(0)2": 3.5,
    "2.5 over": 2.2,
    "2.5 under": 1.55,
    yes: 1.6,
    no: 2.1,
  },
  {
    "1": 1.6,
    "2": 5.9,
    "12": 1.2,
    id: 5,
    date: "21:45",
    name: "Barcelona - Real Madrid",
    X: 3.7,
    "1X": 1.15,
    X2: 2,
    "(0)1": 1.23,
    "(0)2": 3.5,
    "2.5 over": 2.2,
    "2.5 under": 1.55,
    yes: 1.6,
    no: 2.1,
  },
  {
    "1": 1.6,
    "2": 5.9,
    "12": 1.2,
    id: 6,
    date: "21:45",
    name: "Barcelona - Real Madrid",
    X: 3.7,
    "1X": 1.15,
    X2: 2,
    "(0)1": 1.23,
    "(0)2": 3.5,
    "2.5 over": 2.2,
    "2.5 under": 1.55,
    yes: 1.6,
    no: 2.1,
  },
  {
    "1": 1.6,
    "2": 5.9,
    "12": 1.2,
    id: 7,
    date: "21:45",
    name: "Barcelona - Real Madrid",
    X: 3.7,
    "1X": 1.15,
    X2: 2,
    "(0)1": 1.23,
    "(0)2": 3.5,
    "2.5 over": 2.2,
    "2.5 under": 1.55,
    yes: 1.6,
    no: 2.1,
  },
];

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
  &:hover {
    background-color: #e0e0e0;
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

export const TableView = () => {
  return (
    <Wrapper>
      <StyledHeader>
        <HeaderName>Thursday - 23.01 2025</HeaderName>
        <HeaderItem>1</HeaderItem>
        <HeaderItem>X</HeaderItem>
        <HeaderItem>2</HeaderItem>
        <HeaderItem>1X</HeaderItem>
        <HeaderItem>12</HeaderItem>
        <HeaderItem>X2</HeaderItem>
        <HeaderItem>(0)1</HeaderItem>
        <HeaderItem>(0)2</HeaderItem>
        <HeaderItem style={{ width: "auto" }}>UNDER</HeaderItem>
        <HeaderItem>TOT</HeaderItem>
        <HeaderItem style={{ width: "auto" }}>OVER</HeaderItem>
        <HeaderItem>Yes</HeaderItem>
        <HeaderItem>No</HeaderItem>
      </StyledHeader>
      <Box>
        {data.map((d) => {
          return (
            <Row key={d.id}>
              <RowItemDisabled style={{ width: "auto" }}>
                {d["date"]}
              </RowItemDisabled>
              <RowItemDisabled style={{ width: "auto", marginRight: "auto" }}>
                {d["name"]}
              </RowItemDisabled>
              <RowItem>{d["1"]}</RowItem>
              <RowItem>{d["X"]}</RowItem>
              <RowItem>{d["2"]}</RowItem>
              <RowItem>{d["1X"]}</RowItem>
              <RowItem>{d["12"]}</RowItem>
              <RowItem>{d["X2"]}</RowItem>
              <RowItem>{d["(0)1"]}</RowItem>
              <RowItem>{d["(0)2"]}</RowItem>
              <RowItem style={{ width: "70px" }}>{d["2.5 under"]}</RowItem>
              <RowItemDisabled style={{ background: "#e0e0e0" }}>
                2.5
              </RowItemDisabled>
              <RowItem style={{ width: "60px" }}>{d["2.5 over"]}</RowItem>
              <RowItem>{d["yes"]}</RowItem>
              <RowItem>{d["no"]}</RowItem>
            </Row>
          );
        })}
      </Box>
    </Wrapper>
  );
};
