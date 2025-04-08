import Navbar from "@components/organisms/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header className="container px-4 py-3">
                <Navbar />
            </header>
            <main className="container px-4">
                {children}
            </main>
        </>
    );
}

export default HomeLayout;
