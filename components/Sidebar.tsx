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
  position: "left" | "right";
  onClose: () => void;
  children: ReactNode;
  trigger: ReactElement;
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  position,
  onClose,
  children,
  trigger,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isContentVisible, setIsContentVisible] = useState(isOpen);

  useOnClickOutside(() => onClose(), [ref], { enabled: isOpen });

  const triggerElement = cloneElement(trigger, {
    onClick: (e: MouseEvent) => {
      e.stopPropagation();
      trigger.props?.onClick?.(e);
    },
  });

  useEffect(() => {
    if (isOpen) {
      setIsContentVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsContentVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      {triggerElement}
      {isContentVisible && (
        <Portal>
          <div
            className={`fixed top-0 left-0 z-20 w-full h-full bg-black
            ${isOpen ? "animate-fade-in" : "animate-fade-out"}`}
            onClick={onClose}
          />
          <div
            ref={ref}
            className={`fixed top-0 h-full w-[250px] z-30 bg-white shadow-2xl
              ${isOpen ? "animate-slide-in" : "animate-slide-out"}
              ${position === "left" ? "left-0" : "right-0"}
            `}
          >
            {children}
          </div>
        </Portal>
      )}
    </>
  );
};

export default Sidebar;
