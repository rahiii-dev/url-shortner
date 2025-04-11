import clsx from "clsx";

interface ErrorMessageProps {
    message?: string;
    center?: boolean;
}

const ErrorMessage = ({ message, center=false }: ErrorMessageProps) => {
    if (!message) return null;

    return (
        <p className={clsx("mt-1 text-sm text-red-500", center && "text-center")}>
            {message}
        </p>
    );
};

export default ErrorMessage;
