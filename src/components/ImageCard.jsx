import Card from "@/components/Card.jsx";
import {cn} from "@/lib/utils.js";

const ImageCard = ({children, src, text, alt, txt_class, img_class, border_color = "border-black",  hover_on=true, className , padding = "p-4"}) => {
    return (
        <Card
            border_color={border_color}
            hover_on={hover_on}
            className={className}
            padding={padding}
        >
            <img className={img_class} src={src}  alt={alt}/>
            <p className={cn("pt-4", txt_class)}>{text}</p>
            { children }
        </Card>
    )
}

export default ImageCard;