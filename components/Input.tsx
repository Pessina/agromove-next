import React, { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={`border-[1px] rounded-xl border-gray-200 p-3
        ${className}`}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
