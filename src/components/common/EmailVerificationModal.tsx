import styled from "styled-components";
import { Modal } from "../../UI/Modal";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { userStore } from "../../store/userStore";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const StyledTitle = styled.h3`
  font-size: 24px;
`;

const StyledText = styled.p`
  font-size: 14px;
  color: #555555;
  margin-top: 15px;
  & span {
    font-weight: 600;
    color: #000;
    cursor: pointer;
  }
`;

const StyledBtn = styled.button`
  margin: 0 auto;
`;

const StyledLogout = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  img {
    height: 20px;
    width: 20px;
  }
`;

export const EmailVerificationModal = observer(() => {
  const [code, setCode] = useState("");

  function handleChange(c: string) {
    if (Number(c) < 0) return;
    if (c.length > 4) return;
    setCode(c);
  }

  return (
    <Modal>
      <StyledWrapper>
        <StyledHeader>
          <StyledTitle>Email verification</StyledTitle>
          <StyledLogout onClick={() => userStore.deleteUnverifiedUser()}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png"
              alt="logout-icon"
            />
          </StyledLogout>
        </StyledHeader>
        <StyledText>
          We have sent an email with verification code. Please, confirm your
          email.
        </StyledText>
        <input
          type="text"
          placeholder="* * * *"
          value={code}
          onChange={(e) => handleChange(e.target.value)}
        />
        <StyledBtn
          disabled={code.length < 4}
          onClick={() => userStore.verifyEmail(code)}
        >
          Submit
        </StyledBtn>
      </StyledWrapper>
    </Modal>
  );
});
