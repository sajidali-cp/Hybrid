import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import {
  ModalWrapper,
  Outer,
  Container,
  Close,
  CloseIcon,
} from "./StyledModal";
import { FramerMotionVariant } from "../../../theme";
import useClose from "../../../hooks/useClose";
interface ModalProps {
  visible: boolean;
  isLoading?: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  isLoading,
  onClose,
  children,
}) => {
  const { modalRef } = useClose({ visible, isLoading, onClose });
  return createPortal(
    visible && (
      <ModalWrapper
        variants={FramerMotionVariant}
        initial="hidden"
        animate="visible"
      >
        <Outer ref={modalRef}>
          <Container>
            {children}
            {!isLoading && (
              <Close onClick={onClose}>
                <CloseIcon />
              </Close>
            )}
          </Container>
        </Outer>
      </ModalWrapper>
    ),
    document.body
  );
};

export default Modal;
