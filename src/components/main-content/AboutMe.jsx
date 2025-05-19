import StripesContainer from "@/components/StripesContainer.jsx";
import BulletPointParagraph from "@/components/BulletPointParagraph.jsx";

const AboutMe = () => {
    const bulletFontSize = "text-3xl";

    return (
        <section className={"mt-20"}>
            <StripesContainer bgcolor={"bg-primary-gray"} height={"h-fit py-10 px-20 xl:p-20"} flex={"flex-col items-center"}>
                <h1 className={"w-full text-center text-5xl font-black"}>About Me</h1>
                <div id={"about-desc"} className={"w-fit text-start mt-5 flex flex-col gap-5 font-normal"}>
                    <BulletPointParagraph
                        bullet={"👋"}
                        text={`Hello! I'm Edward-Joseph Fattouch, a dedicated software engineering student at the
                               University of Ottawa with a strong interest in full-stack development,
                               cloud infrastructure, and automation.`}
                        textStyles={"text-start"}
                        textSize={bulletFontSize}
                    />
                    <BulletPointParagraph
                        bullet={"💻"}
                        text={`I enjoy designing scalable systems and building user-friendly interfaces and applications`}
                        textStyles={"text-start"}
                        textSize={bulletFontSize}
                    />
                    <BulletPointParagraph
                        bullet={"🧠"}
                        text={` I'm passionate about DevOps, automation, and clean code. 
                                I constantly seek to grow both technically and creatively.`}
                        textStyles={"text-start"}
                        textSize={bulletFontSize}
                    />
                    <BulletPointParagraph
                        bullet={"📂"}
                        text={`This site is a portfolio of my projects, ideas, and the journey I'm on as I grow as a 
                               developer. Thanks for visiting! Feel free to explore!`}
                        textStyles={"text-start"}
                        textSize={bulletFontSize}
                    />
                </div>

            </StripesContainer>
        </section>
    )
}

export default AboutMe;