import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import {cn} from "@/lib/utils.js";
import LogoRound from "@/assets/logo/logo-round.svg"

const Footer = ( { bg_color, margin = "mt-10" } ) => {
    const currentYear = new Date().getFullYear();
    const iconSizes = "h-8 w-8"
    return (
        <footer className={cn("px-10 sm:px-20 py-10 w-full h-fit text-center flex flex-wrap items-center justify-center gap-1 sm:gap-7"
        , bg_color, margin)}>
            <div className={"flex items-center gap-7"}>
                <a className={"h-10 w-10"} href={"/"}>
                    <img className={"rounded-sm h-10 w-10"} src={LogoRound} alt={"Logo"}/>
                </a>
                <p>© {currentYear} Edward-Joseph Fattouch. All Rights Reserved.</p>
            </div>
            <div className={"flex gap-2"}>
                <a href={"https://github.com/ejfattouch"}>
                    <FaGithubSquare className={iconSizes} />
                </a>
                <a href={"https://www.linkedin.com/in/edward-joseph-fattouch-a549141a1/"}>
                    <FaLinkedin className={iconSizes} />
                </a>
            </div>

        </footer>
    )
}

export default Footer;