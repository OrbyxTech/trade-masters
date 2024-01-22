import Avatar from "@/components/ui/Avatar"
import Section from "@/components/ui/Section"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Cloud } from "lucide-react"


function page() {
    return (
        <div>
            <Section
                title="My Account"
                showViewAllBtn={false}
            >
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">Full name</p>
                        <Input className="text-xs" />
                    </div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">First name</p>
                        <Input className="text-xs" />
                    </div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">Last name</p>
                        <Input className="text-xs" />
                    </div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">Mobile</p>
                        <Input className="text-xs" />
                    </div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">Email</p>
                        <Input className="text-xs" />
                    </div>

                    <div className="col-span-full">
                        <p className="text-xs text-foreground font-normal mb-3">Profile Picture</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="w-full sm:w-96 flex-shrink-0 aspect-video rounded-xl bg-transparent/10 border border-foreground/20 flex flex-col items-center justify-center gap-y-2 p-3">
                                <p className="text-xs text-black/80 dark:text-foreground/50 font-normal">Select the desired file</p>
                                <Cloud strokeWidth={1} width={40} height={40} />

                                <input type="file" id="file" className="hidden" />
                                <Button asChild size="sm" className="w-max px-4">
                                    <label htmlFor="file" className="cursor-pointer">Select File</label>
                                </Button>
                            </div>

                            <div className="w-full h-full grid place-items-center">
                                <Avatar />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">Mobile Phone Verification</p>
                        <Input className="text-xs" />
                        <Button size="sm" className="text-xs mt-2">
                            Request
                        </Button>
                    </div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">Change Password</p>
                        <Input className="text-xs" />
                    </div>
                </div>

                <div className="flex items-center gap-x-2 mt-12">
                    <Checkbox id="confirm" />
                    <label htmlFor="confirm" className="text-xs text-foreground font-normal cursor-pointer">
                        Confirm your First and Last name. It Can&apos;t be changed after confirmation.
                    </label>
                </div>

                <Button size="sm" className="text-xs mt-6">
                    Submit
                </Button>
            </Section>
        </div>
    )
}

export default page