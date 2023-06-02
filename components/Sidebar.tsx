import React, {
  cloneElement,
  MouseEvent,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { Portal } from "./Portal";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  trigger: ReactElement<{ onClick?: (e: MouseEvent) => void }>;
  overlayClassName?: string;
  contentClassName?: string;
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  children,
  trigger,
  overlayClassName,
  contentClassName,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(() => onClose(), ref, isOpen);
  const [hasInteracted, setHasInteracted] = useState(false);

  const triggerElement = cloneElement(trigger, {
    onClick: (e: MouseEvent) => {
      e.stopPropagation();
      trigger.props.onClick?.(e);
      setHasInteracted(true);
    },
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {triggerElement}
      <Portal>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black cursor-pointer
            ${
              isOpen
                ? "animate-fade-in z-10"
                : hasInteracted
                ? "animate-fade-out -z-10"
                : "opacity-0 -z-10"
            }
            ${overlayClassName}`}
          onClick={onClose}
        />
        <div
          ref={ref}
          className={`fixed top-0 h-full z-10 bg-white left-0
              ${
                isOpen
                  ? "animate-slide-in"
                  : hasInteracted
                  ? "animate-slide-out"
                  : "-translate-x-full"
              }
              ${contentClassName}
            `}
        >
          {children}
        </div>
      </Portal>
    </>
  );
};

export default Sidebar;
