import Section from "@/components/ui/Section"
import SortTicketBy from "@/components/ui/SortTicketBy"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { BadgeInfo } from "lucide-react"

function page() {
    return (
        <div>
            <Section
                title="List of Tickets"
                showViewAllBtn={false}
            >
                <div className="mt-4 max-sm:flex-col flex items-center justify-between gap-y-4">
                    <SortTicketBy />

                    <Button size="sm" className="text-xs">
                        New Ticket
                    </Button>
                </div>

                <Alert className="border border-sky-500 bg-sky-500/20 mt-6">
                    <AlertDescription className="text-xs text-foreground flex items-center gap-x-3">
                        <div className="text-foreground/80 dark:text-white">
                            <BadgeInfo width={24} height={24} />
                        </div>
                        Use the request menu to check the passing of the first stage, the second stage, as well as the reset and extension request, if you intend to change the broker after passing the first stage, the second stage and after the account reset, register a ticket
                    </AlertDescription>
                </Alert>
            </Section>
        </div>
    )
}

export default page