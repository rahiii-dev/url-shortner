type BadgeProps = {
    children: React.ReactNode;
    variant?: "success" | "warning" | "danger" | "neutral";
  };
  
  const variantStyles = {
    success: "bg-green-200/10 text-green-700",
    warning: "bg-yellow-200/10 text-yellow-600",
    danger: "bg-red-200/10 text-red-700",
    neutral: "bg-gray-200/10 text-gray-600",
  };
  
  const Badge = ({ children, variant = "neutral" }: BadgeProps) => {
    return (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${variantStyles[variant]}`}
      >
        {children}
      </span>
    );
  };
  
  export default Badge;
  