import {cn} from "@/lib/utils.js";

const BulletPointParagraph = ({bullet, text, bulletStyles, textStyles, textSize}) => {


    return (
    <div className={cn("flex flex-row items-center gap-10", textSize)}>
            <span className={cn("text-3xl",  bulletStyles)}>{bullet}</span>
            <span className={cn(textStyles)}>{text}</span>
        </div>
    )
}

export default BulletPointParagraph;