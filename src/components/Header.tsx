import styled from "styled-components";
import { Modal } from "../UI/Modal";
import { useState } from "react";
import { SignInModal } from "./SignInModal";
import { SignUpModal } from "./SignUpModal";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: #313131;
`;

const StyledLogo = styled.p`
  font-size: 40px;
  font-weight: 700;
  color: #1a1a1d;
  color: #fde054;
  span {
    color: #fff;
  }
`;

const StyledLogin = styled.p`
  color: #fde054;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    opacity: 0.7;
  }
`;

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const openSignUp = () => {
    setShowModal(false);
    setShowSignUp(true);
  };

  const openSignIn = () => {
    setShowSignUp(false);
    setShowModal(true);
  };

  return (
    <>
      <StyledWrapper>
        <StyledLogo>
          Bookmaker <span>app</span>
        </StyledLogo>
        <StyledLogin onClick={() => setShowModal(true)}>Sign in</StyledLogin>
      </StyledWrapper>
      {showModal && (
        <SignInModal
          openSignUp={openSignUp}
          onClose={() => setShowModal(false)}
        />
      )}
      {showSignUp && (
        <SignUpModal
          openSignIn={openSignIn}
          onClose={() => setShowSignUp(false)}
        />
      )}
    </>
  );
};
