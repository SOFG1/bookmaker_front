import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  padding: 5px;
  border-bottom: 1px solid #AAA;
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
`

const StyledMarket = styled.p`
    font-size: 12px;
    color: #7D6C19;
    margin-bottom: 5px;
    font-weight: 600;
`

const StyledValue = styled.p`
    color: #DC1A1A;
    font-size: 14px;
    font-weight: 600;
`
const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const StyledX = styled.p`
    transform: scaleX(1.25);
    color: #AAA;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 8px;
`
const StyledOdd = styled.p`
    background-color: #9e860e;
    color: #fff;
    padding: 4px 6px;
    font-weight: 600;
    font-size: 13px;
    border-radius: 5px;
`

export const TicketEventComponent = () => {
  return (
    <StyledWrapper>
      <StyledNumber>1</StyledNumber>
      <StyledContent>
        <StyledName>BArca - Real</StyledName>
        <StyledMarket>Winner</StyledMarket>
        <StyledValue>1</StyledValue>
      </StyledContent>
      <StyledRight>
        <StyledX>X</StyledX>
        <StyledOdd>2.20</StyledOdd>
      </StyledRight>
    </StyledWrapper>
  );
};
