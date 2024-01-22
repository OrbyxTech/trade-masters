
import { Quicksand } from "next/font/google"
import Image from "next/image"

const quicksand = Quicksand({ subsets: ["latin"], weight: "500" })
const quicksand700 = Quicksand({ subsets: ["latin"], weight: "700" })

function Footer() {
    return (
        <footer className="w-full p-1">

            <p className={`${quicksand700.className} text-2xl text-white capitalize text-center mb-5`}>
                <Image
                    alt=""
                    width={90}
                    height={90}
                    src="/ProPiy..png"
                    className="w-20 h-auto inline"
                /> prop trading
            </p>

            <div className="w-full p-3 relative">

                <div className="absolute top-0 left-0 w-7 aspect-square border-t-2 border-l-2 border-white/90 rounded-tl"></div>
                <div className="absolute bottom-0 left-0 w-7 aspect-square border-b-2 border-l-2 border-white/90 rounded-bl"></div>
                <div className="absolute top-0 right-0 w-7 aspect-square border-r-2 border-t-2 border-white/90 rounded-tr"></div>
                <div className="absolute bottom-0 right-0 w-7 aspect-square border-r-2 border-b-2 border-white/90 rounded-br"></div>

                <div className="w-full rounded-xl py-14 px-20 bg-gradient-to-r from-[#02FF6733] to-[#F0009033]">
                    <p className={`${quicksand.className} text-sm text-white`}>
                        The information on the Website is provided solely for analysis purposes only and should not be construed as financial, investment, tax, or other advice. Nothing on the Website or in our Services represents a solicitation, advice, endorsement, or offer to purchase or sell stocks or other financial instruments by Propiy, its agents, employees, contractors, or any connected entities. You are solely responsible for assessing the benefits and risks associated with the use of any information or other content on the Website. All investments include substantial risk, and an individual&apos;s investment decisions are solely his/her obligation. All information on the Website is provided “as is”, with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information, and without warranty of any kind, express or implied. Propiy, or its partners, employees, or agents, shall in no way be responsible to you or anyone else for any decision made or action taken in reliance on the information on the Website, or for any consequential, special, or similar damages, even if warned of the potential of such damages. Purchases should not be regarded as deposits. All program charges are utilized for working expenses including, however not restricted to, staff, innovation, and other business-related costs.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer