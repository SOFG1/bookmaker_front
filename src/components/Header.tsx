import styled from "styled-components";
import { useEffect, useState } from "react";
import { SignInModal } from "./SignInModal";
import { SignUpModal } from "./SignUpModal";
import { observer } from "mobx-react-lite";
import { userStore } from "../store/userStore";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 40px;
  background-color: #313131;
  gap: 10px;
`;

const StyledLogo = styled.p`
  font-size: 40px;
  font-weight: 700;
  color: #1a1a1d;
  margin-right: auto;
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

const StyledEmail = styled(Link)`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
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

  const handleLogout = () => {
    userStore.setUserData(null, null)
  }

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
        {!userStore.user && (
          <StyledLogin onClick={() => setShowModal(true)}>Sign in</StyledLogin>
        )}
        {userStore.user && (
          <>
            <StyledLogout onClick={handleLogout}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png"
                alt="logout-icon"
              />
            </StyledLogout>
            <StyledEmail to="/account">{userStore.user.email}</StyledEmail>
          </>
        )}
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
