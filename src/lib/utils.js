import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}


function getSpacingMultiplier(factor = 1) {
    const root = document.documentElement;
    const spacingValue = getComputedStyle(root).getPropertyValue("--spacing").trim(); // e.g. "1.5rem"

    const match = spacingValue.match(/^([\d.]+)([a-z%]+)$/);
    if (!match) return 0;

    const [_, number, unit] = match;
    const value = parseFloat(number);

    if (unit === "rem") {
        const rootFontSize = parseFloat(getComputedStyle(root).fontSize);
        return value * rootFontSize * factor;
    } else if (unit === "px") {
        return value * factor;
    } else {
        // Optional: Add more unit handling here if needed
        return value * factor; // fallback - returns numeric value without converting units
    }
}



export const scrollWithOffset=(e, id, mt) => {
    e.preventDefault();
    const target = document.getElementById(id.split("#")[1]);
    if (target) {
        const offset = getSpacingMultiplier() * mt;
        console.log(offset)
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y > 0 ? y : 0, behavior: "smooth" });
    }
}