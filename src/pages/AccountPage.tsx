import { observer } from "mobx-react-lite";
import { userStore } from "../store/userStore";
import styled from "styled-components";
import { useState } from "react";
import { DeleteAccountModal } from "../components/DeleteAccountModal";

const StyledEmail = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #fff;
`;

const StyledBalance = styled.p`
  font-size: 22px;
  color: #fff;
  margin-bottom: 400px;
  span {
    font-weight: 700;
  }
`;

export const AccountPage = observer(() => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <StyledEmail>{userStore.user?.email}</StyledEmail>
      <StyledBalance>
        Balance: <span>${userStore.user?.balance}</span>{" "}
        <button disabled={userStore.isLoading} onClick={() => userStore.topupBalance()}>
          Top up
        </button>
      </StyledBalance>
      <button onClick={() => setShowModal(true)}>Delete my account</button>
      {showModal && <DeleteAccountModal onClose={() => setShowModal(false)} />}
    </div>
  );
});
