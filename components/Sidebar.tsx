import React, {
  cloneElement,
  MouseEvent,
  ReactElement,
  ReactNode,
  useCallback,
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
  const [isEntered, setIsEntered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(() => onClose(), [ref], { enabled: isOpen });

  const sidebarClasses = `fixed top-0 h-full w-64 z-20 bg-gray-200 transition-transform duration-300 ease-in-out
    ${position === "left" ? "left-0" : "right-0"}
    ${isOpen ? "transform translate-x-0" : "transform translate-x-full"}`;

  const handleTransitionEnd = useCallback(() => {
    setIsEntered(isOpen);
    if (!isOpen) onClose();
  }, [isOpen, onClose]);

  const triggerElement = cloneElement(trigger, {
    onClick: (e: MouseEvent) => {
      e.stopPropagation();
      trigger.props?.onClick?.(e);
    },
  });

  return (
    <>
      {triggerElement}
      {isOpen && (
        <Portal>
          <div
            ref={ref}
            className={sidebarClasses}
            onTransitionEnd={handleTransitionEnd}
          >
            {isEntered && (
              <button className="absolute top-4 right-4" onClick={onClose}>
                Close
              </button>
            )}
            {children}
          </div>
        </Portal>
      )}
    </>
  );
};

export default Sidebar;
