import ErrorMessage from "@components/atoms/ErrorMessage";
import Text from "@components/atoms/Text";
import Pagination from "@components/molecules/Pagination";
import CTASection from "@components/organisms/CTASection";
import HistoryTable from "@components/organisms/HistoryTable";
import UrlShortener from "@components/organisms/UrlShortener";
import HomeLayout from "@components/templates/HomeLayout";
import { useAuthContext } from "@context/AuthContext";
import { parseError } from "@lib/utils";
import { shortnerService } from "@services/shortenerService";
import { Loader } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { IShortUrl } from "src/types/shortener.interface";

const PAGE_LIMIT = 10;

const Index = () => {
    const {isAuthenticated} = useAuthContext();
    const [shortUrls, setShortenedUrls] = useState<IShortUrl[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const fetchUrls = useCallback(async () => {
        setLoading(true);
        try {
            const res = await shortnerService.myShortenedUrls({page, limit: PAGE_LIMIT});
            setShortenedUrls(res.data);
            setTotalPage(res.totalPages);
        } catch (error) {
            setError(parseError(error, "An error occurred while fetching your shortened URLs."));
        } finally {
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        if(!isAuthenticated) return;
        fetchUrls();
    }, [isAuthenticated, fetchUrls])

    const handleUrlShortened = (shortenedUrl: IShortUrl) => {
        if(page > 1){
            setPage(1);
            return;
        }

        if(setShortenedUrls.length < PAGE_LIMIT) {
            setShortenedUrls((prev) => [shortenedUrl, ...prev]);
        } else {
            setShortenedUrls((prev) => [shortenedUrl, ...prev.slice(0, PAGE_LIMIT - 1)]);
        }
    }

    const handleUrlStatusChange = useCallback(async (shortCode: string, isActive: boolean) => {
        try {
            if (isActive) {
                await shortnerService.deActivateUrl({ shortCode });
            } else {
                await shortnerService.activateUrl({ shortCode });
            }
            setShortenedUrls((prev) =>
                prev.map((url) =>
                    url.shortCode === shortCode ? { ...url, isActive: !isActive } : url
                )
            );
        } catch (error) {
            toast.error("An error occurred while updating the URL status.");
        } 
    }, []);

    return (
        <HomeLayout>
            {isAuthenticated ? (
                <div className="space-y-10 w-full">
                    <Text
                        variant="gradient"
                        className="text-4xl md:text-6xl text-center font-bold leading-tight"
                    >
                        Welcome Back <span className="text-yellow-300">👋</span>
                    </Text>

                    <UrlShortener onShortened={handleUrlShortened}/>
                    <div className="mb-10 mx-auto max-w-5xl">
                        {loading ? <div className="flex justify-center items-center mt-2"><Loader/></div>
                                : error ? <ErrorMessage center message={error} /> 
                                    : shortUrls.length > 0 ? <HistoryTable data={shortUrls} togglShortUrlStatus={handleUrlStatusChange}/>
                                                            : <Text className="text-center text-gray-500">No shortened URLs found.</Text>}

                        {totalPage > 1 && (
                            <div className="flex justify-end my-4">
                                <Pagination currentPage={page} totalPages={totalPage} onPageChange={setPage} />
                            </div>
                        )}
                    </div>                   
                </div>
            ) : (
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <Text
                        variant="gradient"
                        className="text-4xl md:text-6xl font-bold leading-tight"
                    >
                        {"Shorten Your Loooong Links :)"}
                    </Text>
                    <CTASection />
                </div>
            )}
        </HomeLayout>
    );
};

export default Index;
