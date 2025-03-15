import { RefObject, useEffect, useMemo } from "react";

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  handler: (event: Event) => void,
  refs: RefObject<T | null>[] | RefObject<T | null>,
  isEnabled: boolean = true,
) => {
  const refsArray = useMemo(
    () => (Array.isArray(refs) ? refs : [refs]),
    [refs],
  );

  useEffect(() => {
    const listener = (event: Event) => {
      const isOutside = refsArray.every(
        (ref) => !ref.current?.contains(event.target as Node),
      );

      if (isOutside) handler(event);
    };

    if (isEnabled) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, refsArray, isEnabled]);
};
