
import Image from "next/image";
import { Quicksand } from "next/font/google";
import { Button } from "@/components/ui/button";
const quicksand = Quicksand({ subsets: ["latin"], weight: "500" })
import { ChevronRight } from "lucide-react"


interface Props {
    id: string;
    img: string;
    title: string;
    date: string;
    comments: number;
}

function Card3({ comments, date, id, img, title }: Props) {
    return (
        <div className="p-2 relative">

            <div className="absolute top-0 left-0 w-7 aspect-square border-t-2 border-l-2 border-white/90 rounded-tl"></div>
            <div className="absolute bottom-0 left-0 w-7 aspect-square border-b-2 border-l-2 border-white/90 rounded-bl"></div>
            <div className="absolute top-0 right-0 w-7 aspect-square border-r-2 border-t-2 border-white/90 rounded-tr"></div>
            <div className="absolute bottom-0 right-0 w-7 aspect-square border-r-2 border-b-2 border-white/90 rounded-br"></div>

            <div className="w-full aspect-square relative">
                <div className="absolute top-0 left-0 right-0 p-3 rounded-t-xl overflow-hidden bg-transparent/20 backdrop-blur-sm flex items-center gap-x-5 border-b border-white/10">
                    <p className={`text-xs font-normal ${quicksand.className}`}>{comments} Comments</p>
                    <p className={`${quicksand.className} text-xs font-normal`}>{date}</p>
                </div>

                <Image
                    alt=""
                    src={img}
                    width={750}
                    height={750}
                    className="w-full aspect-square object-center object-cover rounded-xl"
                />

                <div className="absolute -bottom-2 left-1/2 w-10/12 bg-transparent/20 -translate-x-1/2 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <p className={`${quicksand.className} text-sm text-white text-center`}>
                        {title}
                    </p>

                    <Button size="icon" className="bg-white rounded-full w-8 h-8 mx-auto translate-y-2 hover:bg-gray-100 grid place-items-center">
                        <ChevronRight width={22} height={22} strokeWidth={1.3} className="stroke-black" />
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Card3