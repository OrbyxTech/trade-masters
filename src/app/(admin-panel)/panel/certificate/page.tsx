import Section from "@/components/ui/Section"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BadgeInfo } from "lucide-react"


function page() {
    return (
        <div>
            <Section
                title="Certificates"
                showViewAllBtn={false}
            >
                <Alert className="border border-sky-500 bg-sky-500/20 mt-6">
                    <AlertDescription className="text-xs text-foreground flex items-center gap-x-3">
                        <div className="text-foreground/80 dark:text-white">
                            <BadgeInfo width={24} height={24} />
                        </div>
                        Please Fill your First an Last name in your profile for certificate generating.
                    </AlertDescription>
                </Alert>
            </Section>
        </div>
    )
}

export default page