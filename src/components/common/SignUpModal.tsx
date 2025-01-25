import styled from "styled-components";
import { Modal } from "../../UI/Modal";
import { useState } from "react";
import { toast } from "react-toastify";
import { userStore } from "../../store/userStore";

const StyledWrapper = styled.form`
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
  openSignIn: () => void;
}

export const SignUpModal = ({ onClose, openSignIn }: IProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    if (password.length < 6) {
      toast("Password must contain at least 6 characters !", { type: "error" });
    }
    if (password !== passwordRepeat) {
      toast("Passwords don't match !", { type: "error" });
      return;
    }
    userStore.signUp(email, password);
  };

  return (
    <Modal onClose={onClose}>
      <StyledWrapper onSubmit={handleSignUp}>
        <StyledTitle>Sign up</StyledTitle>
        <input
          placeholder="Email"
          type="email"
          autoComplete="new-password"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Password repeat"
          type="password"
          autoComplete="new-password"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
        <button>Sign up</button>
        <StyledText>
          Already have an account ? <span onClick={openSignIn}>Sign in</span>
        </StyledText>
      </StyledWrapper>
    </Modal>
  );
};
