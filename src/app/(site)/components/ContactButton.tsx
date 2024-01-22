
import { Button } from "@/components/ui/button"
import { Quicksand } from "next/font/google"

const quicksand = Quicksand({ weight: "500", subsets: ["latin"] })

function ContactButton() {
    return (
        <div className="p-px bg-transparent/25 w-max h-max rounded-xl bg-gradient-to-r to-[#F00090] from-[#02FF67]">
            <Button size="sm" className={`${quicksand.className}
        capitalize py-5 px-8 text-white text-xs bg-slate-900 backdrop-blur-sm rounded-xl hover:bg-slate-950`}>
                Contact US
            </Button>
        </div>
    )
}

export default ContactButton