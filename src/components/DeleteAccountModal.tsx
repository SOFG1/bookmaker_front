import styled from "styled-components";
import { Modal } from "../UI/Modal";
import { useState } from "react";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 300px;
`;

const StyledTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`;

interface IProps {
  onClose: () => void;
}

export const DeleteAccountModal = ({ onClose }: IProps) => {
  const [password, setPassword] = useState("");
  return (
    <Modal onClose={onClose}>
      <StyledWrapper>
        <StyledTitle>Delete account ?</StyledTitle>
        <input
          style={{ width: "100%" }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Delete account permanently</button>
      </StyledWrapper>
    </Modal>
  );
};
