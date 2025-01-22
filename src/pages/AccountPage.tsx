import { observer } from "mobx-react-lite";
import { userStore } from "../store/userStore";
import styled from "styled-components";
import { useState } from "react";
import { DeleteAccountModal } from "../components/DeleteAccountModal";

const StyledEmail = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin: 40px;
  color: #fff;
`;

export const AccountPage = observer(() => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <StyledEmail>
        {userStore.user?.email}{" "}
        <button onClick={() => setShowModal(true)}>Delete my account</button>
      </StyledEmail>
      {showModal && <DeleteAccountModal onClose={() => setShowModal(false)} />}
    </div>
  );
});
