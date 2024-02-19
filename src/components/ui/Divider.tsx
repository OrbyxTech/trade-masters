
import { twMerge } from "tailwind-merge"
import { Poppins } from "next/font/google"

const poppin500 = Poppins({ weight: "500", subsets: ["latin"] })

interface Props {
    text?: string;
    className?: string;
}

function Divider({ text, className }: Props) {
    return (
        text
            ?
            <div className={twMerge("flex items-center gap-x-3", className)}>
                <div className="flex-1 h-px bg-black/40"></div>
                <span className={`text-xs text-black/80 ${poppin500.className}`}>{text}</span>
                <div className="flex-1 h-px bg-black/40"></div>
            </div>
            :
            <div className={twMerge("w-full h-px bg-black/70", className)}></div>
    )
}

export default Divider