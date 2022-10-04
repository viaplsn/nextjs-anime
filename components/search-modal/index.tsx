import React, { useEffect, useState, useRef, MouseEvent } from "react";
import ReactDOM from "react-dom";
import Search from "../search";
import {
  ModalOverlay,
  ModalWrapper,
  Modal,
  ModalHeader,
  CloseButton,
  CloseIcon,
  ModalBody,
} from "./search-modal.styled";

interface ModalProps {
  onClose: () => void;
}

const SearchModal = ({ onClose }: ModalProps): JSX.Element | null => {
  const [isMounted, setIsMounted] = useState(false);
  const modalWrapperRef = useRef<HTMLDivElement>(null);

  const handleCloseClick = (e: MouseEvent) => {
    e.preventDefault();
    onClose();
  };

  useEffect(() => {
    setIsMounted(true);

    const backDropHandler = (e: Event) => {
      if (!modalWrapperRef?.current?.contains(e.target as HTMLElement)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", backDropHandler);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", backDropHandler);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const modalContent = (
    <ModalOverlay>
      <ModalWrapper ref={modalWrapperRef}>
        <Modal>
          <ModalHeader>
            <CloseButton onClick={handleCloseClick}>
              <CloseIcon />
            </CloseButton>
          </ModalHeader>
          <ModalBody>
            <Search />
          </ModalBody>
        </Modal>
      </ModalWrapper>
    </ModalOverlay>
  );

  if (isMounted) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root") as Element);
  } else {
    return null;
  }
};

export default SearchModal;
