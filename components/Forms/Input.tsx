import React, { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string;
  width?: "full" | "fit";
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, width = "full", ...props }, ref) => {
    return (
      <div
        className={`
        ${width === "full" ? "w-full" : "w-fit"}`}
      >
        {label && <p className="text-gray-700 font-semibold mb-1">{label}</p>}
        <input
          {...props}
          ref={ref}
          className={`border-[1px] rounded-lg border-gray-200 px-3 py-2 w-full
        ${className}`}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
