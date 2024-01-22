
'use client';

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ weight: "500", subsets: ["latin"] })


const NavLink = ({ isActive, link, title }: { link: string, title: string; isActive: boolean }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-2">
            <Link href={link} className={`text-xs text-white ${quicksand.className}`}>
                {title}
            </Link>

            <div className={`w-full bg-gradient-to-r from-[#FC0298CC]/80 to-[#02FF67]/80 h-0.5 rounded-xl opacity-0 transition-opacity duration-200
            ${isActive ? "!opacity-100" : ""}`}>
            </div>
        </div>
    )
}

function TopNavigation() {

    const pathname = usePathname()
    const { data, status } = useSession()

    return (
        <nav className="w-full py-7 px-9">
            <div className="w-full flex items-center gap-x-4 justify-between">
                <div className="flex items-center gap-x-10">
                    <Image
                        alt="logo"
                        src="/ProPiy..png"
                        width={150}
                        height={150}
                        className="w-24 h-auto object-center object-cover"
                    />
                </div>

                <div className="flex items-center gap-x-4">
                    <NavLink link="/" title="Home" isActive={pathname === "/"} />
                    <NavLink link="/blog" title="Blog" isActive={pathname === "/blog"} />
                    <NavLink link="/rules" title="Rules" isActive={pathname === "/rules"} />
                    <NavLink link="/faq" title="FAQ" isActive={pathname === "/faq"} />
                </div>

                {/* {
                    status === "loading"
                        ?
                        <div className="w-24 h-9 bg-slate-400 animate-pulse rounded-lg">
                        </div>
                        :
                        <Button asChild size="sm" className="text-xs">
                            {
                                status === "authenticated"
                                    ?
                                    <Link href="/panel">
                                        Dashboard
                                    </Link>
                                    :
                                    <Link href="/api/auth/signin">
                                        login | signup
                                    </Link>
                            }
                        </Button>
                } */}

                <div className="py-2.5 px-3 rounded-lg hover:bg-white/10 backdrop-blur-sm
                transition-colors duration-200 cursor-pointer">
                    <Image
                        alt="burger menu"
                        width={47}
                        height={34}
                        src="/burger-menu.png"
                        className="w-5 h-auto"
                    />
                </div>
            </div>
        </nav>
    )
}

export default TopNavigation