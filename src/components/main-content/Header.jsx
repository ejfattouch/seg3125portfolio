import Card from "@/components/Card.jsx";
import MultiChildTypewriter from "@/components/MultiChildTypewriter.jsx";
import Profile from "@/assets/me.JPG"

const Header = () => {
    return (
        <section className={"w-12/12 sm:w-11/12 md:w-12/12 lg:w-9/12 mx-auto mt-10"}>
            {/* Me face lulz */}
            <div className="w-full text-center">
                <div className="inline-block group relative rounded-full h-100 w-100 p-2 bg-gray-700 overflow-hidden transition-transform duration-300 transform hover:scale-110">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(to_right,_#33CCFF_50%,_#FF3366_50%)]"></div>
                    <img src={Profile} className="relative z-10 rounded-full object-cover h-full w-full" />
                </div>
            </div>
            <div className={"w-full flex justify-center mt-10 p-10"}>
                <Card>
                    <span className={"text-4xl lg:text-5xl font-black"}>
                        Hello! 👋 I'm {""}
                        <MultiChildTypewriter>
                            <span className={"text-primary-red"}>Edward-</span>
                            <span className={"text-primary-blue"}>Joseph.</span>
                        </MultiChildTypewriter>
                    </span>
                    <p className={"text-2xl mt-2 font-bold"}>
                        🎓 Software Engineering student at the University of Ottawa.
                    </p>
                    <p className={"text-2xl mt-2 font-bold"}>
                        📍 Ottawa, ON, Canada
                    </p>
                </Card>
            </div>
        </section>
    )
}

export default Header;