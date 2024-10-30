// PENDING
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  return <></>;
}
