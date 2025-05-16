import { cn } from "@/lib/utils.js";
import StripesContainer from "@/components/StripesContainer.jsx";

const Navbar = () => {
    const navItems = [
        {name: "About Me", href: "/"},
        {name: "How I Work", href: "/"},
        {name: "Case Studies", href: "/"}
    ]
    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300")}>
            <StripesContainer>
            </StripesContainer>
        </nav>
    );
}

export default Navbar;