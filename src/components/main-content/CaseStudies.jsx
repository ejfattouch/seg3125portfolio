import StripesContainer from "@/components/StripesContainer.jsx";
import ImageCard from "@/components/ImageCard.jsx";
import {cn} from "@/lib/utils.js";

// Case Studies images import
import service_site_preview_img from "@/assets/casestudies/service_site.png"
import game_preview_img from "@/assets/casestudies/game.png"
import e_commerce_preview_img from "@/assets/casestudies/e-commerce.png"
import dashboard_preview_img from "@/assets/casestudies/dashboard.png"

const CaseStudies = () => {
    const items = [
        {"src": service_site_preview_img, "text": "Service Site", "alt": "Case Study 1: Service Site", "href": "https://service-web-app-iota.vercel.app/"},
        {"src": game_preview_img, "text": "Small Game", "alt": "Case Study 2: Small Game", "href": "https://word-seeker-game.vercel.app/"},
        {"src": e_commerce_preview_img, "text": "E-Commerce Site", "alt": "Case Study 3: E-Commerce Site", "href": "https://gamevault-seven.vercel.app/"},
        {"src": dashboard_preview_img, "text": "Dashboard Site", "alt": "Case Study 4: Dashboard Site", "href": "https://nrgdash.vercel.app/"}
    ]

    const img_size = "w-60 sm:w-80 lg:w-90 h-60 sm:h-80 lg:h-90";

    return (
        <section className={"mt-20"}>
            <StripesContainer bgcolor={"bg-primary-gray"} height={"h-fit py-10 px-4 sm:px-15 xl:px-20 xl:py-20 flex-col items-center"} flex={"flex-col items-center"}>
                <h1 id={"case_studies"} className={"w-full text-center text-3xl sm:text-4xl lg:text-5xl font-black p-4"}>Case Studies</h1>
                <div className={"w-fit mt-5 flex flex-wrap gap-10 font-normal justify-center"}>
                    {items.map((item, index) => (
                        <ImageCard
                            key={index}
                            src={item.src}
                            img_class={img_size}
                            text={item.text}
                            alt={item.alt}
                            border_color={ index % 2 === 0 ? "border-primary-red" : "border-primary-blue"}
                            txt_class={"text-center font-bold text-xl sm:text-2xl lg:text-3xl"}
                            iframe={item.iframe}
                        >

                            <a target={'_blank'} href={item.href} className={cn("text-center text-xl sm:text-2xl",index % 2 === 0 ? "text-primary-red" : "text-primary-blue-dark")}>View Case Study</a>
                        </ImageCard>
                    ))}
                </div>
            </StripesContainer>
        </section>
    )
}

export default CaseStudies;