import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1000;
`;

const StyledContent = styled.div`
  width: fit-content;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  margin: auto;
`;

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: Props) => {
  return (
    <StyledWrapper onClick={onClose}>
      <StyledContent onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledContent>
    </StyledWrapper>
  );
};
