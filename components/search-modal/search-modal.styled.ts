import styled from "styled-components";
import { X } from "@styled-icons/bootstrap";
import breakpoints from "../../constants/breakpoints";

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

const ModalWrapper = styled.div`
  width: 100%;
  max-width: 38.5rem;
`;

const Modal = styled.div`
  padding: 1rem;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseIcon = styled(X)`
  width: 2rem;
  color: var(--white);
  transition: all 0.3s linear;
`;

const CloseButton = styled.button`
  &:hover {
    cursor: pointer;
    ${CloseIcon} {
      transform: scale(0.95);
      color: var(--graycloud);
    }
  }
`;

const ModalBody = styled.div`
  padding-top: 10px;

  @media (max-width: ${breakpoints.md}) {
    padding-top: 4px;
  }
`;

export { ModalOverlay, ModalWrapper, Modal, ModalHeader, CloseButton, CloseIcon, ModalBody };
