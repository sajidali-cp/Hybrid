import React, { useCallback, useEffect, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
interface Props {
  visible: boolean;
  isLoading?: boolean;
  onClose: () => void;
}
export default function useClose({ visible, isLoading, onClose }: Props) {
  const escFunction = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const modalRef = useRef(null);

  // useEffect(() => {
  //   
  //   //@ts-ignore
  //   visible ? disableBodyScroll(modalRef) : enableBodyScroll(modalRef);
  // }, [visible]);
  useOnClickOutside(modalRef, visible && !isLoading ? onClose : undefined);
  return {modalRef};
}
