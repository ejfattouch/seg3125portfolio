import React from "react";
import {useScrollReveal} from "@/lib/hooks.js"; // Or define it in the same file

export default function RevealSection({ children }) {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-10"
            }`}
        >
            {children}
        </div>
    );
}
