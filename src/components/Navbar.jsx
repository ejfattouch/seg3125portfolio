import StripesContainer from "@/components/StripesContainer.jsx";

const Navbar = () => {
    const navItems = [
        {name: "About Me", href: "/"},
        {name: "How I Work", href: "/"},
        {name: "Case Studies", href: "/"}
    ]
    return (
        <nav className={"w-full h-fit z-40"}>
            <StripesContainer className={"bg-gradient-to-r from-transparent to-black"}>
                <img src={"src/assets/logo-letters.svg"} className={"my-auto ml-5 size-13"}/>
                <ul className={"m-auto flex flex-row justify-end space-x-4"}>
                    {navItems.map((item, index) => (
                        <li className={"relative group"} key={index}>
                            <a href={item.href} className={"text-foreground p-1"}
                               key={index}>{item.name}</a>
                            <div className="absolute left-0 bottom-0 w-full h-0.5 flex scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300">
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