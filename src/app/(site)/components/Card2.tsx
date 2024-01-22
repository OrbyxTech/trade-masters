
import Image from "next/image";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: "500" })

interface Props {
    img: string;
    title: string;
}

function Card2({ img, title }: Props) {
    return (
        <div className="p-2.5 relative w-full">

            <div className="absolute top-0 left-0 w-7 aspect-square border-t-2 border-l-2 border-white/90 rounded-tl"></div>
            <div className="absolute bottom-0 left-0 w-7 aspect-square border-b-2 border-l-2 border-white/90 rounded-bl"></div>
            <div className="absolute top-0 right-0 w-7 aspect-square border-r-2 border-t-2 border-white/90 rounded-tr"></div>
            <div className="absolute bottom-0 right-0 w-7 aspect-square border-r-2 border-b-2 border-white/90 rounded-br"></div>

            <div
                className="w-full aspect-square flex flex-col items-center justify-center gap-y-4 rounded-xl
                bg-gradient-to-br from-[#02FF6733] to-[#F0009033]"
            >
                <Image
                    alt=""
                    width={550}
                    height={550}
                    src={img}
                    className="w-32 h-auto object-center object-cover"
                />

                <div className="bg-clip-text bg-gradient-to-r from-[#02FF67] to-[#F00090] to-60% absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-prose px-4">
                    <p
                        className={`${quicksand.className} text-sm uppercase text-center text-transparent`}
                    >
                        {title}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card2