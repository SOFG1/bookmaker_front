import styled from "styled-components";
import { Modal } from "../UI/Modal";
import { useState } from "react";
import { userApi } from "../api/user";
import { toast } from "react-toastify";
import { userStore } from "../store/userStore";

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
  const [isFetching, setIsFetching] = useState(false);

  async function handleDelete() {
    try {
      setIsFetching(true);
      const { data } = await userApi.deleteAccount(password);
      if (data) toast(data.message, { type: "success" });
      userStore.setUserData(null, null);
      onClose();
    } catch (e) {
      toast(String(e), { type: "error" });
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <Modal onClose={onClose}>
      <StyledWrapper>
        <StyledTitle>Delete account ?</StyledTitle>
        <input
          style={{ width: "100%" }}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleDelete} disabled={isFetching}>
          Delete account permanently
        </button>
      </StyledWrapper>
    </Modal>
  );
};
