import {cn} from "@/lib/utils.js";

const Card = ({ children, border_color = "border-black",  hover_on=true }) => {
    const shadowColors = {
        "border-black": "bg-black",
        "border-primary-blue": "bg-[#007399]",
        "border-primary-red": "bg-[#800020]",
    };

    const shadow = shadowColors[border_color] || "bg-black";

    return (
        <div className="relative inline-block">
            {/* Shadow Box */}
            <div
                className={cn(
                    "absolute top-1 left-1 w-full h-full",
                    shadow,
                )}
                aria-hidden="true"
            />

            {/* Card */}
            <div
                className={cn(
                    "relative flex flex-col p-4 bg-white border-3",
                    hover_on ? "transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5" : "",
                    border_color
                )}
            >
                {children}
            </div>
        </div>
    );
};



export default Card;