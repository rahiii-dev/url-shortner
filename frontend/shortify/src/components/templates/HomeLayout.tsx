import Navbar from "@components/organisms/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header className="container px-4 py-3 mx-auto">
                <Navbar />
            </header>
            <main className="container px-4 mx-auto">
                {children}
            </main>
        </>
    );
}

export default HomeLayout;
