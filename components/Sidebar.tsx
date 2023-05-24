import React, {
  cloneElement,
  MouseEvent,
  ReactElement,
  ReactNode,
  useRef,
} from "react";

import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { Portal } from "./Portal";

type SidebarProps = {
  isOpen: boolean;
  position: "left" | "right";
  onClose: () => void;
  children: ReactNode;
  trigger: ReactElement;
  overlayClassName?: string;
  contentClassName?: string;
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  position,
  onClose,
  children,
  trigger,
  overlayClassName,
  contentClassName,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(() => onClose(), ref, isOpen);

  const triggerElement = cloneElement(trigger, {
    onClick: (e: MouseEvent) => {
      e.stopPropagation();
      trigger.props?.onClick?.(e);
    },
  });

  return (
    <>
      {triggerElement}
      <Portal>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black cursor-pointer
            ${isOpen ? "animate-fade-in z-10" : "animate-fade-out"}
            ${overlayClassName}`}
          onClick={onClose}
        />
        <div
          ref={ref}
          className={`fixed top-0 h-full z-10 bg-white
              ${isOpen ? "animate-slide-in" : "animate-slide-out"}
              ${position === "left" ? "left-0" : "right-0"}
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
