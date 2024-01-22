import DatePicket from "@/components/ui/DatePicket"
import Section from "@/components/ui/Section"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BadgeInfo, Cloud, CloudCog, CloudDrizzle, CloudHail } from "lucide-react"
import { CloudIcon } from "lucide-react"

function page() {
    return (
        <div>
            <Section
                title="Authentication"
                showViewAllBtn={false}
            >
                <Alert className="border border-sky-500 bg-sky-500/20 mt-6">
                    <AlertDescription className="text-xs text-foreground flex items-center gap-x-3">
                        <div className="text-foreground/80 dark:text-white">
                            <BadgeInfo width={24} height={24} />
                        </div>
                        Registered information cannot be edited. Be careful when entering information.
                    </AlertDescription>
                </Alert>

                <Alert className="border border-red-500 bg-red-500/20 mt-3">
                    <AlertDescription className="text-xs text-foreground text-center">
                        لطفا قبل از ارسال درخواست احراز هویت ، اطلاعات نام کاربری را در حساب کاربری وارد نمایید ، این اطلاعات باید مطابق با اطلاعات عکس کارت شناسایی شما باشد .
                    </AlertDescription>
                </Alert>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-xs text-foreground font-normal mb-2">Date of Birth</p>
                        <DatePicket />
                    </div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-2">National Code</p>
                        <Input className="text-xs" />
                    </div>
                </div>

                <div className="my-6 w-full border border-dashed border-foreground/30"></div>
                <div>
                    <p className="text-xs text-foreground font-normal mb-3">National card image</p>
                    <div className="flex max-md:flex-col items-center gap-4">
                        <div className="w-full sm:w-96 flex-shrink-0 aspect-video rounded-xl bg-transparent/10 border border-foreground/20 flex flex-col items-center justify-center gap-y-2 p-3">
                            <p className="text-xs text-black/80 dark:text-foreground/50 font-normal">Select the desired file</p>
                            <Cloud strokeWidth={1} width={40} height={40} />

                            <input type="file" id="file" className="hidden" />
                            <Button asChild size="sm" className="w-max px-4">
                                <label htmlFor="file">Select File</label>
                            </Button>
                        </div>

                        <div>
                            <p className="text-sm text-foreground font-medium">Tips</p>
                            <div className="mt-4 flex flex-col gap-y-2">
                                <div className="flex items-center gap-x-1">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <p className="text-xs text-foreground font-normal">The photo should not be more than 500 KB.</p>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <p className="text-xs text-foreground font-normal">Poor quality and unclear photos will not be approved</p>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                                    <p className="text-xs text-foreground font-normal">
                                        If you don&apos;t have a national card, you can replace this option with a new birth certificate (with a photo and containing the national number) or a valid passport.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-6 w-full border border-dashed border-foreground/30"></div>
                <div>
                    <p className="text-xs text-foreground font-normal mb-3">
                        Applicant&apos;s picture with national card
                    </p>
                    <div className="flex max-md:flex-col items-center gap-4">
                        <div className="w-full sm:w-96 flex-shrink-0 aspect-video rounded-xl bg-transparent/10 border border-foreground/20 flex flex-col items-center justify-center gap-y-2 p-3">
                            <p className="text-xs text-black/80 dark:text-foreground/50 font-normal">Select the desired file</p>
                            <Cloud strokeWidth={1} width={40} height={40} />

                            <input type="file" id="file" className="hidden" />
                            <Button asChild size="sm" className="w-max px-4">
                                <label htmlFor="file">Select File</label>
                            </Button>
                        </div>

                        <div>
                            <p className="text-sm text-foreground font-medium">Tips</p>
                            <div className="mt-4 flex flex-col gap-y-2">
                                <div className="flex items-center gap-x-1">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <p className="text-xs text-foreground font-normal">
                                        You must send a selfie photo with a high quality national card without glasses and mask
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <p className="text-xs text-foreground font-normal">The photo should not be more than 500 KB.</p>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                                    <p className="text-xs text-foreground font-normal">
                                        If you don&apos;t have a national card, you can replace this option with a new birth certificate (with a photo and containing the national number) or a valid passport.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Button size="sm" className="mt-10 text-xs block mx-auto">
                    Submit
                </Button>
            </Section>
        </div>
    )
}

export default page