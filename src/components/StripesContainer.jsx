import { cn } from "@/lib/utils.js"

const StripesContainer = ({ children, height = "h-15", flex = "flex-row", className, bgcolor }) => {
    const h_color1 = "h-3";
    const h_color2 = "h-2";

    return (
        <div className={cn( className, "z-20")}>
            <div className={cn("bg-primary-blue w-full", h_color1)}></div>
            <div className={cn("bg-primary-blue-dark", h_color2)}></div>

            <div className={cn("flex bg-main w-full", height, flex, bgcolor)}>
                {children}
            </div>

            <div className={cn("bg-primary-red-dark", h_color2)}></div>
            <div className={cn("bg-primary-red", h_color1)}></div>
        </div>
    );
}

export default StripesContainer;