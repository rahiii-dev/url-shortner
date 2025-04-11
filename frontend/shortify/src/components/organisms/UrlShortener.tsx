import { useState } from "react";
import Button from "@components/atoms/Button";
import { Link } from "lucide-react";
import ErrorMessage from "@components/atoms/ErrorMessage";
import { validateUrl } from "@lib/validators";
import { parseError } from "@lib/utils";
import { shortnerService } from "@services/shortenerService";
import { IShortUrl } from "src/types/shortener.interface";

type UrlShortenerProps = {
    onShortened?: (shortenedUrl: IShortUrl) => void;
}

const UrlShortener = ({onShortened}: UrlShortenerProps) => {
    const [shortenedUrl, setShortenedUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const originalUrl = formData.get("url") as string;

        const urlValidationError = validateUrl(originalUrl);

        if (urlValidationError) {
            setError(urlValidationError);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const res = await shortnerService.shorten({ originalUrl });
            onShortened?.(res);
            setShortenedUrl("");
        } catch (error) {
            setError(parseError(error, "An error occurred while shortening the URL."));
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
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
                    onChange={(e) => setShortenedUrl(e.target.value)}
                    value={shortenedUrl}
                />


                <Button type="submit" className="h-full cursor-pointer" disabled={loading}>
                    {loading ? "Shortening..." : " Shorten Now!"}
                </Button>
            </form>
            {error && <div className="mt-1 text-center"><ErrorMessage message={error} /></div>}
        </>
    );
};

export default UrlShortener;