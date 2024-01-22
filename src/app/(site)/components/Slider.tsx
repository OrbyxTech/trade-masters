
'use client';

import { useKeenSlider } from "keen-slider/react"
import { Quicksand } from "next/font/google";
import { ReactNode, useEffect } from "react";

const quicksand = Quicksand({ subsets: ["latin"], weight: "700" })

interface Props {
    children: ReactNode;
    title: ReactNode | string;
    dontOverrideTitle?: boolean;
}

function Slider({ children, title, dontOverrideTitle = false }: Props) {

    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            spacing: -230,
            perView: 2.3
        }
    })

    return (
        <div>

            <div className="flex items-center gap-x-3 justify-between mb-7 pl-28">
                {
                    typeof title === "string" || typeof title === "object"
                        &&
                        dontOverrideTitle
                        ?
                        <p className={`${quicksand.className} text-white text-2xl`}>
                            {title}
                        </p>
                        :
                        typeof title === "string"
                            ?
                            <p className={`${quicksand.className} text-white text-2xl`}>
                                {title}
                            </p>
                            :
                            title
                }
            </div>

            <div ref={sliderRef} className="keen-slider">
                {children}
            </div>
        </div>
    )
}

export default Slider