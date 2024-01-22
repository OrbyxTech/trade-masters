
'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react"
import {
    LayoutGrid, PlusSquare, Swords, Mail, Users, UserCheck, Wallet2, Medal, SquareStack, BadgeCheck,
    Scale, UserCircle, CircleDollarSign, ArrowBigUpDash, Smile, Ticket, Power
} from "lucide-react"

const NavLink = ({ isActive, link, title, icon }: { link: string, title: string; isActive: boolean; icon: ReactNode }) => {
    return (
        <Button asChild className={`w-full text-xs justify-start font-normal px-2 ${!isActive && "text-foreground/70"}`} size="sm" variant={isActive ? "default" : "ghost"}>
            <Link href={link} className="flex items-center gap-x-2">
                {icon}
                {title}
            </Link>
        </Button>
    )
}

function SideBarNavigation() {

    const pathName = usePathname()

    return (
        <div className="flex flex-col gap-y-1">
            <NavLink
                icon={<LayoutGrid strokeWidth={1.75} width={18} height={18} />}
                title="Dashboard"
                link="/panel"
                isActive={pathName === "/panel"}
            />

            <NavLink
                icon={<PlusSquare strokeWidth={1.75} width={18} height={18} />}
                title="Start new Challenge"
                link="/panel/new-challenge"
                isActive={pathName === "/panel/new-challenge"}
            />

            <NavLink
                icon={<Swords strokeWidth={1.75} width={18} height={18} />}
                title="My Challenges"
                link="/panel/my-challenges"
                isActive={pathName === "/panel/my-challenges"}
            />

            <NavLink
                icon={<Mail strokeWidth={1.75} width={18} height={18} />}
                title="Request"
                link="/panel/request"
                isActive={pathName === "/panel/request"}
            />

            <NavLink
                icon={<Users strokeWidth={1.75} width={18} height={18} />}
                title="Leader Board"
                link="/panel/leader-board"
                isActive={pathName === "/panel/leader-board"}
            />

            <NavLink
                icon={<UserCheck strokeWidth={1.75} width={18} height={18} />}
                title="Authentication"
                link="/panel/verify"
                isActive={pathName === "/panel/verify"}
            />

            <NavLink
                icon={<Wallet2 strokeWidth={1.75} width={18} height={18} />}
                title="Wallet"
                link="/panel/wallet"
                isActive={pathName === "/panel/wallet"}
            />

            <NavLink
                icon={<Medal strokeWidth={1.75} width={18} height={18} />}
                title="Partnership"
                link="/panel/referral"
                isActive={pathName === "/panel/referral"}
            />

            <NavLink
                icon={<SquareStack strokeWidth={1.75} width={18} height={18} />}
                title="Orders"
                link="/panel/orders"
                isActive={pathName === "/panel/orders"}
            />

            <NavLink
                icon={<BadgeCheck strokeWidth={1.75} width={18} height={18} />}
                title="Certificate"
                link="/panel/certificate"
                isActive={pathName === "/panel/certificate"}
            />

            <NavLink
                icon={<Scale strokeWidth={1.75} width={18} height={18} />}
                title="Rules"
                link="/panel/rules"
                isActive={pathName === "/panel/rules"}
            />

            <NavLink
                icon={<UserCircle strokeWidth={1.75} width={18} height={18} />}
                title="My Account"
                link="/panel/profile"
                isActive={pathName === "/panel/profile"}
            />

            <NavLink
                icon={<CircleDollarSign strokeWidth={1.75} width={18} height={18} />}
                title="Profit Withdrawal"
                link="/panel/withdrawal"
                isActive={pathName === "/panel/withdrawal"}
            />

            <NavLink
                icon={<ArrowBigUpDash strokeWidth={1.75} width={18} height={18} />}
                title="Jet Jump Withdrawal"
                link="/panel/jet-withdrawal"
                isActive={pathName === "/panel/jet-withdrawal"}
            />

            <NavLink
                icon={<Smile strokeWidth={1.75} width={18} height={18} />}
                title="Free Trial"
                link="/panel/free-trial"
                isActive={pathName === "/panel/free-trial"}
            />

            <NavLink
                icon={<Ticket strokeWidth={1.75} width={18} height={18} />}
                title="Support Tickets"
                link="/panel/tickets"
                isActive={pathName === "/panel/tickets"}
            />

            {/* <NavLink
                icon={<Power strokeWidth={1.75} width={18} height={18} />}
                title="Sign Out"
                link="/panel/sign-out"
                isActive={pathName === "/panel/sign-out"}
            /> */}
        </div>
    )
}

export default SideBarNavigation