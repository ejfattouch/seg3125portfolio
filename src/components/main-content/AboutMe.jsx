import StripesContainer from "@/components/StripesContainer.jsx";
import BulletPointParagraph from "@/components/BulletPointParagraph.jsx";

const AboutMe = () => {
    const bulletFontSize = "text-2xl sm:text-3xl lg:text-4xl";
    const textStyle = "text-start p-0 sm:p-4 text-xl sm:text-2xl lg:text-3xl -ml-5 sm:ml-0"

    return (
        <section className={"mt-20"}>
            <StripesContainer bgcolor={"bg-primary-gray"} height={"h-fit py-10 px-4 sm:px-15 xl:py-20  xl:px-30"} flex={"flex-col items-center"}>
                <h1 id={"about-desc"} className={"w-full text-center text-3xl sm:text-4xl lg:text-5xl font-black p-4"}>About Me</h1>
                <div className={"w-fit text-start flex flex-col gap-2 font-normal"}>
                    <BulletPointParagraph
                        bullet={"👋"}
                        text={`Hello! I'm Edward-Joseph Fattouch, a dedicated software engineering student at the
                               University of Ottawa with a strong interest in full-stack development,
                               cloud infrastructure, and automation.`}
                        textStyles={textStyle}
                        textSize={bulletFontSize}
                    />
                    <BulletPointParagraph
                        bullet={"💻"}
                        text={`I enjoy designing scalable systems and building user-friendly interfaces and applications`}
                        textStyles={textStyle}
                        textSize={bulletFontSize}
                    />
                    <BulletPointParagraph
                        bullet={"🧠"}
                        text={` I'm passionate about DevOps, automation, and clean code. 
                                I constantly seek to grow both technically and creatively.`}
                        textStyles={textStyle}
                        textSize={bulletFontSize}
                    />
                    <BulletPointParagraph
                        bullet={"📂"}
                        text={`This site is a portfolio of my projects, ideas, and the journey I'm on as I grow as a 
                               developer. Thanks for visiting! Feel free to explore!`}
                        textStyles={textStyle}
                        textSize={bulletFontSize}
                    />
                </div>

            </StripesContainer>
        </section>
    )
}

export default AboutMe;