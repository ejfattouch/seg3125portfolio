import {cn} from "@/lib/utils.js";

const Card = ({ children, border_color = "border-black",  hover_on=true, className , padding = "p-4"}) => {
    const shadowColors = {
        "border-black": "bg-black",
        "border-primary-blue": "bg-[#007399]",
        "border-primary-red": "bg-[#800020]",
    };

    const shadow = shadowColors[border_color] || "bg-black";

    return (
        <div className={cn("relative w-fit h-fit inline-block", className)}>
            {/* Shadow Box */}
            <div
                className={cn(
                    "absolute top-2 left-2 w-full h-full",
                    shadow,
                )}
                aria-hidden="true"
            />

            {/* Card */}
            <div
                className={cn(
                    "relative flex flex-col w-fit bg-main border-3",
                    hover_on ? "transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5" : "",
                    border_color,
                    padding
                )}
            >
                {children}
            </div>
        </div>
    );
};



export default Card;