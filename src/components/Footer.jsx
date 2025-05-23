import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import {cn} from "@/lib/utils.js";
import LogoRound from "@/assets/logo/logo-round.svg"

const Footer = ( { bg_color, margin = "mt-10" } ) => {
    const currentYear = new Date().getFullYear();
    const iconSizes = "h-8 w-8"
    return (
        <footer className={cn("py-10 w-full h-fit text-center flex items-center gap-5 justify-center"
        , bg_color, margin)}>
            <a className={"h-10 w-10"} href={"/"}>
                <img className={"rounded-sm"} src={LogoRound} alt={"Logo"}/>
            </a>
            <p>© {currentYear} Edward-Joseph Fattouch. All Rights Reserved.</p>
            <a href={"https://github.com/ejfattouch"}>
                <FaGithubSquare className={iconSizes} />
            </a>
            <a href={"https://www.linkedin.com/in/edward-joseph-fattouch-a549141a1/"}>
                <FaLinkedin className={iconSizes} />
            </a>
        </footer>
    )
}

export default Footer;