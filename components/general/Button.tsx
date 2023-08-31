import React, { ButtonHTMLAttributes, forwardRef } from "react";

enum ButtonTheme {
  GREEN = "GREEN",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", theme = ButtonTheme.GREEN, ...rest }, ref) => {
    return (
      <button
        {...rest}
        ref={ref}
        className={`px-4 py-2 rounded-md font-semibold text-sm md:text-base
        ${className} 
        ${rest.disabled ? "bg-gray-100" : ""}
        ${theme === ButtonTheme.GREEN ? "bg-green-800 text-white" : ""}`}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
