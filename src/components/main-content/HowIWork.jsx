import StripesContainer from "@/components/StripesContainer.jsx";
import BulletPointParagraph from "@/components/BulletPointParagraph.jsx";

const HowIWork = () => {
    const bulletFontSize = "text-2xl sm:text-3xl lg:text-4xl";
    const textStyle = "text-start p-0 sm:p-4 text-xl sm:text-2xl lg:text-3xl -ml-5 sm:ml-0"

    return (
        <section className={"mt-20"}>
            <div className={"h-fit py-10 px-4 sm:px-15 xl:px-30 xl:py-20 flex-col items-center"}>
                <h1 id={"how_i_work"} className={"w-full text-center text-3xl sm:text-4xl lg:text-5xl font-black p-4"}>How I Work</h1>
                <div className={"w-fit text-start flex flex-col font-normal"}>
                    <BulletPointParagraph
                        bullet={"🎓"}
                        text={`
                        Currently taking a UI design course focused on usability principles, layout, 
                        and visual hierarchy.
                        `}
                        textStyles={textStyle}
                        textSize={bulletFontSize}
                    />
                    <BulletPointParagraph
                        bullet={"📚"}
                        text={`
                        Learning through hands-on projects and resources from Nielsen Norman Group (NN/g).
                        `}
                        textStyles={textStyle}
                        textSize={bulletFontSize}
                    />
                    <BulletPointParagraph
                        bullet={"🛠️"}
                        text={`
                         Applying design concepts in real-time to portfolio pieces to reinforce best practices.
                        `}
                        textStyles={textStyle}
                        textSize={bulletFontSize}
                    />
                </div>

            </div>
        </section>
    )
}

export default HowIWork;