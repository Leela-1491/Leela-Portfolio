import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

// Support both <button> and <a> links seamlessly
type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Base styles: accessible focus rings, smooth transition, font styling
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  // Size mappings
  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2.5 text-xs sm:text-sm",
    lg: "px-5 py-3 text-sm sm:text-base",
  };

  // Variant mappings
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-cyan-400 hover:bg-cyan-300 text-black shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 hover:border-neutral-700",
    outline:
      "bg-transparent hover:bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800",
    ghost:
      "bg-transparent hover:bg-neutral-900/60 text-neutral-300 hover:text-white",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <a href={href} className={combinedClasses} {...linkProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={combinedClasses} {...buttonProps}>
      {children}
    </button>
  );
}

