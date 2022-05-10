import React, { useState } from "react";

export default function useModal() {
  const [visible, setvisible] = useState(false);
  const handleToggle = () => {
    // e.preventDefault();
    setvisible((prev) => {
      return !prev;
    });
  };
  const handleClose = () => {
    setvisible(false);
  };
  return { visible, handleToggle, handleClose };
}
