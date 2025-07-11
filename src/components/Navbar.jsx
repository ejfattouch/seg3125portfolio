import StripesContainer from "@/components/StripesContainer.jsx";
import LogoLetters from "@/assets/logo/logo-letters.svg"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = [
        {name: "About Me", href: "/#about-desc"},
        {name: "How I Work", href: "/#how_i_work"},
        {name: "Case Studies", href: "/#case_studies"}
    ]
    return (
        <nav className={"w-full h-fit z-40"}>
            <StripesContainer className={"bg-gradient-to-r from-transparent to-black"} flex={"flex-row items-center"}>
                <a href="/" className={"hidden sm:block px-3"}>
                    <img src={LogoLetters} className={"ml-5 size-13"}/>
                </a>
                <ul className={"absolute left-1/2 -translate-x-1/2 flex flex-row justify-end space-x-4"}>
                    {navItems.map((item, index) => (
                        <li className={"relative group"} key={index}>
                            <Link
                                to={item.href}
                                className={"text-foreground p-1 font-normal text-m text-nowrap sm:text-xl"}
                                key={index}
                            >
                                {item.name}
                            </Link>
                            <div className="absolute left-0 bottom-0 w-full h-1 flex scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300">
                                <div className="w-1/2 h-full bg-primary-blue"></div>
                                <div className="w-1/2 h-full bg-primary-red"></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </StripesContainer>
        </nav>
    );
}

export default Navbar;