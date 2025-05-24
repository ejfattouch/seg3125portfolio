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

    const img_size = "w-60 sm:w-80 lg:w-90";

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
                            txt_class={"text-center font-bold text-xl sm:text-2xl lg:text-3xl"}>

                            <a href={item.href} className={cn("text-center text-xl sm:text-2xl",index % 2 === 0 ? "text-primary-red" : "text-primary-blue-dark")}>View Case Study</a>
                        </ImageCard>
                    ))}
                </div>
            </StripesContainer>
        </section>
    )
}

export default CaseStudies;