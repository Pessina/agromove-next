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
    const inputClassName = `border-[1px] rounded-lg border-gray-200 px-3 py-2 w-full ${
      error ? "border-red-500" : ""
    } ${className}`;

    return (
      <div className={`${width === "full" ? "w-full" : "w-fit"}`}>
        {label && <Label text={label} />}
        <input {...props} ref={ref} className={inputClassName} />
        {error && <Error message={error} />}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
