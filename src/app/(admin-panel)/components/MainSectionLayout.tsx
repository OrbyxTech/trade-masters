
'use client'

import { type ReactNode } from "react"
import ThemeChanger from "@/components/ui/ThemeChanger";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Card2 from "@/components/ui/Card2";
import Card3 from "@/components/ui/Card3";
import MarketOverviewCharts from "@/components/ui/MarketOverviewCharts";
import User from "@/components/ui/User";
import MobileMenu from "@/components/ui/MobileMenu";

interface Props {
    children: ReactNode;
}

function MainSectionLayout({ children }: Props) {

    const pathName = usePathname()

    return (
        <div className={pathName === "/panel" ? `grid grid-cols-1 lg:grid-cols-[1fr_14rem] gap-2` : ""}>
            <div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-section mb-3">
                    <div className="lg:hidden">
                        <MobileMenu />
                    </div>
                    
                    <User />

                    <div className="max-lg:hidden">
                        <ThemeChanger />
                    </div>
                </div>

                {children}
            </div>

            {
                pathName === "/panel"
                    ?
                    <div className="bg-white dark:bg-section p-1.5 rounded-xl flex flex-col gap-y-3 max-lg:max-w-xs max-lg:mx-auto">

                        <div>
                            <Image
                                alt=""
                                width={500}
                                height={339}
                                src="/side_jet_panel.png"
                                className="w-full h-auto object-center object-cover"
                            />
                        </div>

                        <div>
                            <Card2
                                img="/freeChallenge.svg"
                                link=""
                                title="Free Trial"
                                subTitle="test your skills with Free-Trial"
                                btnText="start"
                            />
                        </div>

                        <div className="mt-3">
                            <p className="text-sm font-normal text-foreground px-2">Leader Board</p>

                            <div className="mt-3 flex flex-col gap-y-2">
                                <Card3
                                    img="/iran.png"
                                    title="Taha Davari"
                                    value="+ $864.00"
                                    subTitle="Account 59K"
                                />

                                <Card3
                                    img="/iran.png"
                                    title="Poria. Sh"
                                    value="+ $863.00"
                                    subTitle="Account 63K"
                                />
                            </div>
                        </div>

                        <div className="mt-3">
                            <MarketOverviewCharts />
                        </div>

                    </div>
                    :
                    null
            }
        </div>
    )
}

export default MainSectionLayout
