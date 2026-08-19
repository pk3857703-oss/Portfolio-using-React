import React from "react";

/**
 * Same API as your original Button, extended with onClick/type/variant
 * support so the "Contact me" CTA (and others) actually do something.
 */
export const Button = ({ className, size = "default", variant = "primary", children, onClick, type = "button", ...rest }) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.98]";

  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
    outline: "border border-border text-foreground hover:bg-secondary",
    ghost: "text-foreground hover:bg-secondary",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-4 py-2 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ""}`;

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
