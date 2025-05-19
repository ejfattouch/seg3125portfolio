import Header from "@/components/main-content/Header.jsx";
import AboutMe from "@/components/main-content/AboutMe.jsx";

export const Home = () => {
    return (
        <div className="min-h-screen pt-20 text-foreground overflow-x-hidden ">
            <Header />
            <AboutMe />
        </div>);
}