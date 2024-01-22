
'use client';

import { Menu } from "lucide-react"
import { ReactNode, useState } from "react";
import { Button } from "./button";
import Link from "next/link";
import SideBarNavigation from "@/app/(admin-panel)/components/SideBarNavigation";

function MobileMenu() {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <Button onClick={() => setIsOpen(true)} size="icon" variant="outline">
                <Menu width={20} height={20} />
            </Button>

            <div
                onClick={() => setIsOpen(false)}
                className={`fixed top-0 left-0 w-full h-full z-[999] bg-black/50 pointer-events-none
                opacity-0 transition-opacity duration-200 ${isOpen ? "!opacity-100 !pointer-events-auto" : ""}`}
            >
            </div>

            <div
                className={`fixed top-0 left-0 w-full h-full max-w-[16rem] z-[1000] bg-section -translate-x-full
                transition-transform duration-300 p-2 overflow-y-auto ${isOpen ? "!translate-x-0" : ""}`}
            >

                <Link href="/panel" className="text-lg font-medium block text-center w-full py-4 pb-6">
                    Trade Masters
                </Link>

                <SideBarNavigation />

            </div>
        </>
    )
}

export default MobileMenu