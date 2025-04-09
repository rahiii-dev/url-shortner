import { twMerge } from "tailwind-merge";

const Label = ({ className="", children }: React.LabelHTMLAttributes<HTMLLabelElement>) => {
    const baseClasses = "block mb-1 text-sm font-medium text-white";
    const merged = twMerge(baseClasses, className);
    return (
        <label className={merged}>
            {children}
        </label>);
};

export default Label;
