import { useCallback } from "react";
import { cn } from "~/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-md hover:shadow-lg",
  secondary:
    "bg-coral-500 text-white hover:bg-coral-600 active:bg-coral-700 shadow-md hover:shadow-lg",
  ghost:
    "text-primary-600 hover:bg-primary-50 active:bg-primary-100",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#128C7E] active:bg-[#075E54] shadow-md hover:shadow-lg",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3 text-lg",
};

function createRipple(e: React.MouseEvent<HTMLElement>) {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  const span = document.createElement("span");
  span.className = "ripple-span";
  span.style.width = span.style.height = `${size}px`;
  span.style.left = `${x}px`;
  span.style.top = `${y}px`;

  button.appendChild(span);
  span.addEventListener("animationend", () => span.remove());
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  disabled,
  children,
  as = "button",
  href,
  target,
  rel,
  onMouseDown,
  ...props
}: ButtonProps) {
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      createRipple(e);
      onMouseDown?.(e);
    },
    [onMouseDown]
  );

  const classes = cn(
    "btn-ripple inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-xl transition-all duration-200 cursor-pointer",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onMouseDown={handleMouseDown}
      {...props}
    >
      {children}
    </button>
  );
}
