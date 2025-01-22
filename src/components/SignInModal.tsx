import styled from "styled-components";
import { Modal } from "../UI/Modal";
import { useState } from "react";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
`;

const StyledTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
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

interface IProps {
  onClose: () => void;
  openSignUp: () => void;
}

export const SignInModal = ({ onClose, openSignUp }: IProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Modal onClose={onClose}>
      <StyledWrapper>
        <StyledTitle>Sign in</StyledTitle>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign in</button>
        <StyledText>
          Don't have an account ? <span onClick={openSignUp}>Sign up</span>
        </StyledText>
      </StyledWrapper>
    </Modal>
  );
};
