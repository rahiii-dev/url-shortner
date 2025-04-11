import Text from "@components/atoms/Text";
import CTASection from "@components/organisms/CTASection";
import HistoryTable from "@components/organisms/HistoryTable";
import UrlShortener from "@components/organisms/UrlShortener";
import HomeLayout from "@components/templates/HomeLayout";

const Index = () => {
    const isAuthenticated = false;

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

                    <UrlShortener />
                    <HistoryTable data={[]}/>
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
