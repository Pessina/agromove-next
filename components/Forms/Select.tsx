import React, { forwardRef, SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  label?: string;
  width?: "full" | "fit";
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", label, width = "full", ...props }, ref) => {
    return (
      <div className={`${width === "full" ? "w-full" : "w-fit"}`}>
        {label && <p className="text-gray-700 font-semibold mb-1">{label}</p>}
        <select
          {...props}
          ref={ref}
          className={`border-[1px] rounded-lg border-gray-200 px-3 py-2 w-full
        ${className}`}
        />
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
