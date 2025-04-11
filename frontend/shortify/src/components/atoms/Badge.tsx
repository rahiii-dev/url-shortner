import { twMerge } from "tailwind-merge";

type BadgeProps = {
    children: React.ReactNode;
    variant?: "success" | "warning" | "danger" | "neutral";
  } & React.HTMLAttributes<HTMLSpanElement>;
  
  const variantStyles = {
    success: "bg-green-200/10 text-green-700 hover:text-green-500",
    warning: "bg-yellow-200/10 text-yellow-600 hover:text-yellow-400",
    danger: "bg-red-200/10 text-red-700 hover:text-red-500",
    neutral: "bg-gray-200/10 text-gray-600 hover:text-gray-400",
  };
  
  const Badge = ({ className="", children, variant = "neutral", ...props }: BadgeProps) => {
    return (
      <span
        className={twMerge(className, "px-2 py-1 text-xs font-medium rounded-full transition-all duration-300 ease-in-out", variantStyles[variant])}
        {...props}
      >
        {children}
      </span>
    );
  };
  
  export default Badge;
  