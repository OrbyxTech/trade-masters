
import Image from "next/image";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: "500" })
const quicksandValue = Quicksand({ subsets: ["latin"], weight: "700" })


interface Props {
    title: string;
    value: string;
    subTitle: string;
    img: string;
}

function Card4({ subTitle, title, value, img }: Props) {
    return (
        <div className="w-full relative rounded-xl overflow-hidden">
            <Image
                alt=""
                src={img}
                width={550}
                height={550}
                className="w-full aspect-square object-center object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 p-3 bg-transparent/25 backdrop-blur-sm">
                <div className="w-max mx-auto">
                    <p className={`${quicksand.className} text-xs uppercase text-white`}>{title}</p>
                    <div className="bg-clip-text bg-gradient-to-r from-[#02FF67] from-30% to-60% to-[#F00090]">
                        <p className={`${quicksandValue.className} text-4xl mt-1 text-transparent uppercase text-center tracking-wider`}>{value}</p>
                    </div>
                    <p className={`${quicksand.className} text-xs uppercase text-end mt-1`}>{subTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default Card4