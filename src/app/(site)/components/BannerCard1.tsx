
import { Quicksand } from "next/font/google"

const quicksand = Quicksand({ subsets: ["latin"], weight: "700" })
const subtitleQuicksand = Quicksand({ subsets: ["latin"], weight: "500" })

function BannerCard1() {
    return (
        <div className="relative p-3">

            <div className="absolute top-0 left-0 w-7 aspect-square border-t-2 border-l-2 border-white/90 rounded-tl"></div>
            <div className="absolute bottom-0 left-0 w-7 aspect-square border-b-2 border-l-2 border-white/90 rounded-bl"></div>
            <div className="absolute top-0 right-0 w-7 aspect-square border-r-2 border-t-2 border-white/90 rounded-tr"></div>
            <div className="absolute bottom-0 right-0 w-7 aspect-square border-r-2 border-b-2 border-white/90 rounded-br"></div>

            <div className="w-full bg-gradient-to-r from-[#02FF674D] to-[#FC02984D] rounded-2xl p-4 grid grid-cols-3 gap-4 place-items-center">
                <div>
                    <div className="bg-clip-text bg-gradient-to-br from-[#02FF67] to-[#F00090]">
                        <p
                            className={`${quicksand.className} text-5xl text-center text-transparent`}
                        >
                            +10
                        </p>
                    </div>

                    <p
                        className={`${subtitleQuicksand.className} text-sm text-white/90 mt-3 text-center`}
                    >
                        Time need to start<br />a chaellenge
                    </p>
                </div>

                <div>
                    <div className="bg-clip-text bg-gradient-to-br from-[#02FF67] to-[#F00090]">
                        <p
                            className={`${quicksand.className} text-5xl text-center text-transparent`}
                        >
                            +10000
                        </p>
                    </div>

                    <p
                        className={`${subtitleQuicksand.className} text-sm text-white/90 mt-3 text-center`}
                    >
                        Our traders
                    </p>
                </div>

                <div>
                    <div className="bg-clip-text bg-gradient-to-br from-[#02FF67] to-[#F00090]">
                        <p
                            className={`${quicksand.className} text-5xl text-center text-transparent`}
                        >
                            +1M
                        </p>
                    </div>

                    <p
                        className={`${subtitleQuicksand.className} text-sm text-white/90 mt-3 text-center`}
                    >
                        All traders
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BannerCard1