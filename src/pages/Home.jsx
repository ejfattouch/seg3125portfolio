import Header from "@/components/main-content/Header.jsx";
import AboutMe from "@/components/main-content/AboutMe.jsx";
import HowIWork from "@/components/main-content/HowIWork.jsx";
import CaseStudies from "@/components/main-content/CaseStudies.jsx";

export const Home = () => {
    return (
        <div className="min-h-screen pt-20 text-foreground overflow-x-hidden ">
            <Header />
            <AboutMe />
            <HowIWork />
            <CaseStudies />
        </div>);
}