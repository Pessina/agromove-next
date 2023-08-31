import React, { forwardRef, SelectHTMLAttributes } from "react";

import Error from "./Error";
import Label from "./Label";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  label?: string;
  width?: "full" | "fit";
  error?: string;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", label, width = "full", error, ...props }, ref) => {
    return (
      <div className={`${width === "full" ? "w-full" : "w-fit"}`}>
        {label && <Label text={label} />}
        <select
          {...props}
          ref={ref}
          className={`border-[1px] rounded-lg border-gray-200 px-3 py-2 w-full 
          ${error ? "border-red-500" : ""}
          ${className}`}
        />
        {error && <Error message={error} />}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
