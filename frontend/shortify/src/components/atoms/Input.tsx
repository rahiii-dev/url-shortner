import { twMerge } from "tailwind-merge";

const Input = ({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    const baseClasses = "w-full px-4 py-2 rounded-full bg-surface border border-light-gray text-white placeholder:text-gray-400 focus:outline-none focus:border-0 focus:ring-2 focus:ring-primary";
    const merged = twMerge(baseClasses, className);

    return (
        <input
            className={merged}
            {...props}
        />
    );
};

export default Input;
