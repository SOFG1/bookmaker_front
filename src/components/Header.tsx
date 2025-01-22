import styled from "styled-components";
import { Modal } from "../UI/Modal";
import { useEffect, useState } from "react";
import { SignInModal } from "./SignInModal";
import { SignUpModal } from "./SignUpModal";
import { observer } from "mobx-react-lite";
import { userStore } from "../store/userStore";

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

const StyledEmail = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`

export const Header = observer(() => {
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

  useEffect(() => {
    setShowModal(false);
    setShowSignUp(false);
  }, [userStore.user]);

  return (
    <>
      <StyledWrapper>
        <StyledLogo>
          Bookmaker <span>app</span>
        </StyledLogo>
        {!userStore.user && <StyledLogin onClick={() => setShowModal(true)}>Sign in</StyledLogin>}
        {userStore.user && <StyledEmail>{userStore.user.email}</StyledEmail>}
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
});
