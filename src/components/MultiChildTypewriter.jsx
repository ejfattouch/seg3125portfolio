import { ReactTyped } from "react-typed";
import React, {useState, useEffect} from "react";

const MultiChildTypewriter = ({ children, speed=50, loop=false, span=true, className = "" }) => {
    const filter = (child) => {
        if (
            React.isValidElement(child) &&
            typeof child.props.children === "string"
        ) {
            return {
                text: child.props.children,
                className: child.props.className ? child.props.className : ""
            };
        }
        return undefined;
    };

    const texts = React.Children.toArray(children)
        .map(filter)
        .filter(Boolean)

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < texts.length - 1) {
            const delay = texts[currentIndex].text.length * speed + 500; // 500ms buffer
            const timer = setTimeout(() => {
                setCurrentIndex((prev) => prev + 1);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, texts, speed]);

    const Wrapper = span ? "span" : "div";

    return (
        <Wrapper className={className}>
            {texts.slice(0, currentIndex + 1).map((item, index) => (
                <ReactTyped
                    key={index}
                    strings={[item.text]}
                    typeSpeed={speed}
                    backSpeed={speed/2}
                    showCursor={false}
                    className={item.className}
                    loop={loop}
                />
            ))}
        </Wrapper>
    )
}

export default MultiChildTypewriter;