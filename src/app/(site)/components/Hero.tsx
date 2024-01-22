import Image from "next/image"
import TopNavigation from "./TopNavigation"
import { Quicksand } from "next/font/google"
import ContactButton from "./ContactButton"

const quicksand = Quicksand({ weight: "700", subsets: ["latin"] })

function Hero() {
    return (
        <div className="w-full relative z-10 h-screen">
            <Image
                alt=""
                width={1920}
                height={958}
                src="/hero-image-2.png"
                className="absolute top-0 left-0 object-center object-cover w-full h-full -z-10"
            />

            <Image
                alt=""
                width={920}
                height={286}
                src="/ellipse-1.png"
                className="absolute w-[42rem] -z-10 h-auto top-0 left-1/2 -translate-x-1/2"
            />

            <div className="z-10 mb-12">
                <TopNavigation />
            </div>

            <div className="grid grid-cols-[1fr_5rem] min-h-[23rem] w-10/12 mx-auto">
                <div className="pl-20">
                    <h2 className={`text-white text-6xl [text-shadow:0_0_15px_white] leading-[3.8rem] mb-7 ${quicksand.className}`}>
                        We Are Here<br />For You
                    </h2>

                    <p className={`text-[#02FF67] text-xl inline ${quicksand.className}`}>
                        Our fund
                    </p>
                    &nbsp;
                    <span className={quicksand.className}>,</span>
                    &nbsp;
                    <p className={`text-[#F00090] text-xl inline ${quicksand.className}`}>
                        Your Trade
                    </p>

                    <div className="mt-12"></div>
                    <ContactButton />
                </div>

                <div className="flex flex-col gap-y-3">
                    <Image
                        alt=""
                        width={50}
                        height={51}
                        src="/fb.png"
                        className="w-7 h-7 object-center object-cover"
                    />
                    <Image
                        alt=""
                        width={50}
                        height={51}
                        src="/ig.png"
                        className="w-7 h-7 object-center object-cover"
                    />
                    <Image
                        alt=""
                        width={50}
                        height={51}
                        src="/be.png"
                        className="w-7 h-7 object-center object-cover"
                    />
                    <Image
                        alt=""
                        width={50}
                        height={51}
                        src="/tw.png"
                        className="w-7 h-7 object-center object-cover"
                    />
                    <Image
                        alt=""
                        width={50}
                        height={51}
                        src="/pi.png"
                        className="w-7 h-7 object-center object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero