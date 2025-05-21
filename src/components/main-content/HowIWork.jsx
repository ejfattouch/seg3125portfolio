import StripesContainer from "@/components/StripesContainer.jsx";
import BulletPointParagraph from "@/components/BulletPointParagraph.jsx";

const HowIWork = () => {
    const bulletFontSize = "text-3xl";

    return (
        <section className={"mt-20"}>
            <div className={"h-fit py-10 px-20 xl:p-20 flex-col items-center"}>
                <h1 className={"w-full text-center text-5xl font-black"}>How I Work</h1>
                <div id={"about-desc"} className={"w-fit text-start mt-5 flex flex-col gap-8 font-normal"}>
                    <BulletPointParagraph
                        bullet={"👋"}
                        text={`I am currently developing my skills through a UI design course as part of my university 
                        program. This course is helping me build a strong foundation in core design principles and techniques. 
                        I’m learning about topics such as usability, user-centered design, and heuristic evaluation—concepts 
                        that I will integrate into my future design process.
                        `}
                        textStyles={"text-start"}
                        textSize={bulletFontSize}
                    />
                    <BulletPointParagraph
                        bullet={"👋"}
                        text={`
                        We are also using resources like the Nielsen Norman Group (NN/g) to deepen our understanding of 
                        user experience best practices. As I gain more experience, I plan to update this section with a 
                        detailed explanation of my workflow, including the tools and methods I use to approach design challenges.

                        For now, my focus is on learning and applying fundamental design principles to create interfaces that are both functional and user-friendly.`}
                        textStyles={"text-start"}
                        textSize={bulletFontSize}
                    />
                    <BulletPointParagraph
                        bullet={"👋"}
                        text={`
                        For now, my focus is on learning and applying fundamental design principles to create interfaces 
                        that are both functional and user-friendly.
                        `}
                        textStyles={"text-start"}
                        textSize={bulletFontSize}
                    />
                </div>

            </div>
        </section>
    )
}

export default HowIWork;