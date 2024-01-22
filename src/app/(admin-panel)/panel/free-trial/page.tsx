import Section from "@/components/ui/Section"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BadgeInfo } from "lucide-react"

function page() {
    return (
        <div>
            <Section
                title="Free-Trial"
                showViewAllBtn={false}
            >
                <div className="mt-4">
                    <Alert className="border border-sky-500 bg-sky-500/20 mt-6">
                        <AlertDescription dir="rtl" className="text-xs text-foreground flex items-center gap-x-3">
                            <div className="text-foreground/80 dark:text-white self-start">
                                <BadgeInfo width={24} height={24} />
                            </div>
                            برای شرکت در چالش رایگان شرایط زیر را مطالعه نمایید<br /><br />
                            1. استفاده از چالش رایگان برای هرکاربر فقط یک بار امکان پذیر می باشد.<br />
                            2. مدت زمان چالش رایگان ۵ روز از زمان درخواست ایجاد آن است.<br />
                            3. پس از ایجاد چالش رایگان فقط یک روز برای شروع اولین ترید فرصت دارید. در غیر اینصورت چالش رایگان شما متوقف خواهد شد.<br />
                            4. چالش رایگان برای تست بروکر و وب سایت پراپی است و شامل مراحل بعدی نخواهد شد
                        </AlertDescription>
                    </Alert>

                    <div className="mt-6">
                        <p className="text-sm text-foreground font-normal mb-5">Mobile Number Verification</p>

                        <div>
                            <p className="text-xs text-foreground font-normal mb-3">Mobile Number</p>
                            <Input className="text-xs max-w-xs" placeholder="Enter your mobile number" />
                            <Button size="sm" className="text-xs mt-3">
                                Request
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default page