import {useLayoutEffect, useMemo, useRef} from "react";
import {createPortal} from "react-dom";

export default function Modal({
                                children,
                                isOpen,
                                onClose,
                                appear,
                                interactive = true,
                              }) {
  const container = useMemo(() => {
    const container = document.createElement("div");
    container.className = "modal inset-0 z-50 overflow-x-hidden overflow-y-auto"
    return container;
  }, [interactive]);
  const hasAppearedRef = useRef(!appear);

  useLayoutEffect(() => {
    const tryClose = (event) => {
      if (event.target === event.currentTarget) {
        onClose(event);
      }
    };
    container.addEventListener("click", tryClose);
    return () => {
      container.removeEventListener("click", tryClose);
    };
  }, [container, onClose]);

  useLayoutEffect(() => {
    if (isOpen) {
      hasAppearedRef.current = true;
      document.body.appendChild(container);
    }
    container.classList.toggle("isOpen", isOpen);
  }, [container, isOpen]);

  useLayoutEffect(() => {
    return () => {
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, [container]);

  return isOpen || hasAppearedRef.current
      ? createPortal(children, container)
      : null;
}
