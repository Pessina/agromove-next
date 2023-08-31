import React, { forwardRef, InputHTMLAttributes } from "react";

import Error from "./Error";
import Label from "./Label";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string;
  width?: "full" | "fit";
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, width = "full", error, ...props }, ref) => {
    return (
      <div className={`${width === "full" ? "w-full" : "w-fit"}`}>
        {label && <Label text={label} />}
        <input
          {...props}
          ref={ref}
          className={`border-[1px] rounded-lg border-gray-200 px-3 py-2
          ${error ? "border-red-500" : ""} 
          ${className}`}
        />
        {error && <Error message={error} />}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
