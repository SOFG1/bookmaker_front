import styled from "styled-components";
import { EventOddType } from "../../store/eventsStore";
import { observer } from "mobx-react-lite";
import { IBetEvent } from "../../store/betsStore";
import { formatDate } from "../../utils/formatDate";

const PlaceTexts: { [key in EventOddType]: string } = {
  win1: "1",
  draw: "X",
  win2: "2",
};

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  padding: 5px;
  border-bottom: 1px solid #aaa;
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

const StyledDate = styled.p`
  color: #ffffff;
  font-size: 14px;
  text-shadow: 1px 1px 2px #000;
  margin-bottom: 15px;
`;

const StyledOdd = styled.p<{ $status: string }>`
  background-color: #9e860e;
  color: #fff;
  padding: 4px 6px;
  font-weight: 600;
  font-size: 13px;
  border-radius: 5px;
  ${({ $status }) =>
    $status === "lost" && "background-color: rgba(255, 0, 0, 0.6);"}
  ${({ $status }) =>
    $status === "won" && "background-color: rgba(0, 128, 0, 0.6);"}
`;

interface IProps {
  event: IBetEvent;
  number: number;
}

export const BetEventComponent = observer(({ event, number }: IProps) => {
  return (
    <StyledWrapper>
      <StyledNumber>{number}</StyledNumber>
      <StyledContent>
        <StyledName>{event?.title}</StyledName>
        <StyledMarket>Winner</StyledMarket>
        <StyledValue>{PlaceTexts[event.place]}</StyledValue>
      </StyledContent>
      <StyledRight>
        <StyledDate>{formatDate(event.date)}</StyledDate>
        <StyledOdd $status={event.status}>{event.odd}</StyledOdd>
      </StyledRight>
    </StyledWrapper>
  );
});
