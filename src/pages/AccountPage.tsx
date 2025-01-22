import { observer } from "mobx-react-lite";
import { userStore } from "../store/userStore";
import styled from "styled-components";

const StyledEmail = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin: 40px;
  color: #fff;
`;

export const AccountPage = observer(() => {
  return (
    <div>
      <StyledEmail>
        {userStore.user?.email} <button>Delete my account</button>
      </StyledEmail>
    </div>
  );
});
