import styled from "styled-components";
import { TicketEventComponent } from "../components/TicketEventComponent";
import { observer } from "mobx-react-lite";
import { ticketStore } from "../store/ticketStore";
import { useMemo, useState } from "react";
import { MAX_BET, MAX_WIN } from "../constants";
import { betsStore } from "../store/betsStore";

const StyledWrapper = styled.div`
  background-color: #fde054;
  width: 350px;
  position: fixed;
  right: 20px;
  top: 71px;
  border: 1px solid #2e2e2e;
`;

const StyledHeader = styled.div`
  background-color: #2e2e2e;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const StyledTitle = styled.p`
  color: #3dce33;
  font-size: 18px;
  font-weight: 600;
`;

const StyledPlus = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  height: 32px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledList = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

const StyledControls = styled.div`
  padding: 0 10px;
  width: 100%;
`;

const StyledTotal = styled.p`
  margin: 30px 0 10px;
`;

const StyledWin = styled.p`
  margin: 5px 0 5px;
  span {
    font-weight: 700;
  }
`;

const StyledBtn = styled.button`
  width: 100%;
  background-color: #29b21f;
  color: #fff;
  text-align: center;
  padding: 8px 15px;
  font-size: 20px;
  font-weight: 700;
  border: 0;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background-color: #3bc931;
  }
  &:disabled {
    background-color: #597757;
    cursor: not-allowed;
  }
  margin-bottom: 15px;
`;

const ClearBtn = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-bottom: 7px;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledMessage = styled.p`
  color: #dc1a1a;
  margin-bottom: 15px;
  font-weight: 500;
  text-align: center;
`;

export const TicketView = observer(() => {
  const [oddsMesasge, setOddsMessage] = useState(false);
  const [amount, setAmount] = useState<string>("");

  const totalOdd = useMemo(() => {
    if (ticketStore.totalOdds === 1) return "";
    return ticketStore.totalOdds.toFixed(2);
  }, [ticketStore.totalOdds]);

  const winning = useMemo(() => {
    let w = Number(amount) * Number(totalOdd);
    if (w > MAX_WIN) w = MAX_WIN;
    return w.toFixed(2);
  }, [amount, totalOdd]);


  const handleBet = async () => {
    const data = await betsStore.createBet(Number(amount))
    if(data?.message === "odds_changed") {
      setOddsMessage(true)
      setTimeout(() => setOddsMessage(false), 6000)
    }
    if(data?.message === "success") {
      setAmount("")
    }
  }

  const handleChange = (val: string) => {
    if (val === "") {
      setAmount("");
      return;
    }
    const num = Number(val);
    if (num < 0) {
      setAmount(String(0));
      return;
    }
    if (num > MAX_BET) {
      setAmount(String(MAX_BET));
      return;
    }
    setAmount(String(num));
  };

  return (
    <StyledWrapper>
      <StyledHeader onClick={() => ticketStore.setOpened(!ticketStore.opened)}>
        <StyledTitle>My bets</StyledTitle>
        <StyledPlus>{ticketStore.opened ? " " : "+"}</StyledPlus>
      </StyledHeader>
      {ticketStore.opened && (
        <StyledContent>
          <StyledList style={{ width: "100%" }}>
            {ticketStore.events.map((e, i) => (
              <TicketEventComponent
                number={i + 1}
                eventId={e.eventId}
                place={e.place}
                key={e.eventId}
              />
            ))}
          </StyledList>
          <StyledControls>
            <StyledTotal>Odds: {totalOdd}</StyledTotal>
            <div>
              <input
                value={amount}
                onChange={(e) => handleChange(e.target.value)}
                type="number"
                placeholder="Amount"
              />
              <span>$</span>
            </div>
            <StyledWin>
              Possible win: <span>{winning}</span>
            </StyledWin>
            <StyledBtn
              onClick={handleBet}
              disabled={betsStore.isFetching || !amount || !ticketStore.events.length}
            >
              Place bet
            </StyledBtn>
            {oddsMesasge && <StyledMessage>Odds changed please try again</StyledMessage>}
            <ClearBtn onClick={() => ticketStore.clear()}>clear</ClearBtn>
          </StyledControls>
        </StyledContent>
      )}
    </StyledWrapper>
  );
});
