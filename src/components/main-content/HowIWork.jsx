import StripesContainer from "@/components/StripesContainer.jsx";
import BulletPointParagraph from "@/components/BulletPointParagraph.jsx";

const HowIWork = () => {
    const bulletFontSize = "text-3xl";

    return (
        <section id={"how_i_work"} className={"mt-20"}>
            <div className={"h-fit py-10 px-20 xl:px-30 xl:py-20 flex-col items-center"}>
                <h1 className={"w-full text-center text-5xl p-4 font-black"}>How I Work</h1>
                <div id={"about-desc"} className={"w-fit text-start flex flex-col font-normal"}>
                    <BulletPointParagraph
                        bullet={"🎓"}
                        text={`
                        Currently taking a UI design course focused on usability principles, layout, 
                        and visual hierarchy.
                        `}
                        textStyles={"text-start p-4"}
                        textSize={bulletFontSize}
                    />
                    <BulletPointParagraph
                        bullet={"📚"}
                        text={`
                        Learning through hands-on projects and resources from Nielsen Norman Group (NN/g).
                        `}
                        textStyles={"text-start p-4"}
                        textSize={bulletFontSize}
                    />
                    <BulletPointParagraph
                        bullet={"🛠️"}
                        text={`
                         Applying design concepts in real-time to portfolio pieces to reinforce best practices.
                        `}
                        textStyles={"text-start p-4"}
                        textSize={bulletFontSize}
                    />
                </div>

            </div>
        </section>
    )
}

export default HowIWork;