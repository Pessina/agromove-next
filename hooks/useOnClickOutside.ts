import { RefObject, useEffect } from "react";

type Event = MouseEvent;
type ClickOutsideOptions = { enabled?: boolean };
const defaultOptions: ClickOutsideOptions = { enabled: true };

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  handler?: (event: Event) => void,
  refs?: RefObject<T>[],
  options: ClickOutsideOptions = defaultOptions
) => {
  useEffect(() => {
    let listener: ((event: Event) => void) | undefined;

    if (options.enabled) {
      listener = (event: Event) => {
        const isOutside =
          refs &&
          refs.every((ref) => !ref.current?.contains(event?.target as Node));

        if (isOutside) handler?.(event);
      };

      document.addEventListener("click", listener);
    }

    return () => {
      if (listener) {
        document.removeEventListener("click", listener);
      }
    };
  }, [refs, handler, options.enabled]);
};
