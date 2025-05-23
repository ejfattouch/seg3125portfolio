import StripesContainer from "@/components/StripesContainer.jsx";
import ImageCard from "@/components/ImageCard.jsx";
import {cn} from "@/lib/utils.js";
import PlaceHolderComingSoon from "@/assets/placeholder.png"

const CaseStudies = () => {
    const items = [
        {"src": PlaceHolderComingSoon, "text": "Service Site", "alt": "Case Study 1", "href": "/service-site"},
        {"src": PlaceHolderComingSoon, "text": "Small Game", "alt": "Case Study 2", "href": "/game"},
        {"src": PlaceHolderComingSoon, "text": "E-Commerce Site", "alt": "Case Study 3", "href": "/commerce"},
        {"src": PlaceHolderComingSoon, "text": "Analytics Site", "alt": "Case Study 4", "href": "/analytics"}
    ]

    const img_size = "w-80 h-80";

    return (
        <section id={"case_studies"} className={"mt-20"}>
            <StripesContainer bgcolor={"bg-primary-gray"} height={"h-fit py-10 px-20 xl:py-20  xl:px-30"} flex={"flex-col items-center"}>
                <h1 id={"about-desc"} className={"w-full text-center text-5xl font-black p-4"}>Case Studies</h1>
                <div className={"w-fit mt-5 flex flex-wrap gap-10 font-normal justify-center"}>
                    {items.map((item, index) => (
                        <ImageCard
                            key={index}
                            src={item.src}
                            img_class={img_size}
                            text={item.text}
                            alt={item.alt}
                            border_color={ index % 2 === 0 ? "border-primary-red" : "border-primary-blue"}
                            txt_class={"text-center font-bold text-xl"}>

                            <a href={item.href} className={cn("text-center",index % 2 === 0 ? "text-primary-red" : "text-primary-blue-dark")}>View Case Study</a>
                        </ImageCard>
                    ))}
                </div>
            </StripesContainer>
        </section>
    )
}

export default CaseStudies;