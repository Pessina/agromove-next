import React, { ButtonHTMLAttributes, forwardRef } from "react";

enum ButtonTheme {
  GREEN = "GREEN",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className = "", theme = ButtonTheme.GREEN, ...rest },
  ref
) {
  return (
    <button
      {...rest}
      ref={ref}
      className={`px-3 py-2 rounded-lg
      ${className} 
      ${rest.disabled ? "bg-gray-100" : ""}
      ${theme === ButtonTheme.GREEN ? "bg-green-800" : ""}`}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
