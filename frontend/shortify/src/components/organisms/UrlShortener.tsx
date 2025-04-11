import { useState } from "react";
import Button from "@components/atoms/Button";
import { Link } from "lucide-react";

const UrlShortener = () => {
    const [shortenedUrl, setShortenedUrl] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const originalUrl = formData.get("url") as string;

        if (!originalUrl || !originalUrl.startsWith("http")) {
            setError("Please enter a valid URL including http(s)");
            return;
        }

        // Simulate API response
        setTimeout(() => {
            setShortenedUrl("https://sho.rt/abcd1234");
            setError(null);
        }, 1000);
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="flex items-center max-w-2xl h-16 mx-auto rounded-full overflow-hidden bg-surface border-2 border-gray-500 
                    focus-within:border-primary transition-colors duration-300 ease-in-out p-1 shadow-lg">
            <div className="flex items-center px-4">
                <Link />
            </div>

            <input
                type="url"
                name="url"
                placeholder="Enter the link here"
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-2 py-3"
            />

            <Button type="submit" className="h-full">
                Shorten Now!
            </Button>
        </form>

    );
};

export default UrlShortener;