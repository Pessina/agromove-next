import { useEffect, useState } from "react";

export const useLazyLoad = (elementId) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: "100px",
      }
    );

    const target = document.getElementById(elementId);
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [elementId]);

  return isVisible;
};
