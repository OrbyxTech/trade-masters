import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google"
import { Button } from "@/components/ui/button"
import Divider from "@/components/ui/Divider"
import { Input } from "@/components/ui/input"
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"

const poppinsFont400 = Poppins({ weight: "400", subsets: ["latin"] })
const poppinsFont500 = Poppins({ weight: "500", subsets: ["latin"] })

function page() {
    return (
        <div
            className="w-full h-screen grid grid-cols-[3.5fr_10fr] overflow-hidden"
        >
            <div className="relative">
                <Image
                    alt="login"
                    fill
                    src="/images/signup/signup.png"
                    className="object-center object-cover"
                />
            </div>

            <main
                className="overflow-y-auto p-6"
            >
                <div className="flex items-center justify-between">
                    <Select>
                        <SelectTrigger className="max-w-[14rem]">
                            <SelectValue placeholder="Language" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="English (united States)">English (united States)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <p className={`text-xs xl:text-sm text-black/70 ${poppinsFont400.className}`}>
                        Already have an account?&nbsp;&nbsp;&nbsp;
                        <Button
                            asChild
                            variant="bordered"
                            className="rounded-full px-7 h-8"
                        >
                            <Link href="/login" className={`text-black/95 text-sm`}>
                                Sign in
                            </Link>
                        </Button>
                    </p>
                </div>

                <div
                    className="mt-12 w-full px-6 max-w-sm xl:max-w-lg maw mx-auto"
                >

                    <div className="w-7 h-7 mx-auto rounded-full bg-[#C4C4C4]"></div>

                    <p
                        className={`text-2xl mt-5 text-center text-[#333333] ${poppinsFont500.className}`}
                    >
                        Create  an account
                    </p>

                    <p
                        className={`text-sm mt-1 max-w-prose text-center text-[#666666] ${poppinsFont500.className}`}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, consectetur?
                    </p>

                    <div className="space-y-3 mt-8">
                        <div>
                            <label
                                htmlFor="username-email"
                                className={`text-xs text-black/70 mb-1.5 block ${poppinsFont400.className}`}
                            >
                                Email
                            </label>

                            <Input
                                id="username-email"
                                type="email"
                                variant="bordered"
                                className=""
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className={`text-xs text-black/70 mb-1.5 block ${poppinsFont400.className}`}
                            >
                                Password
                            </label>

                            <Input
                                id="password"
                                type="password"
                                variant="bordered"
                                className=""
                            />
                        </div>

                        <Button className={`rounded-full w-full bg-secondary text-white  ${poppinsFont400.className}`}>
                            Log in
                        </Button>
                    </div>

                    <Divider text="OR" className="my-6" />

                    <div className="mt-8 space-y-3">
                        <Button
                            variant="bordered"
                            className={`w-full rounded-full border-black/80 ${poppinsFont500.className}`}
                        >
                            <img alt="google" src="/images/google.png" className="w-5 h-auto mr-2" />
                            Continue with Google
                        </Button>

                        <Button
                            variant="bordered"
                            className={`w-full rounded-full border-black/80 ${poppinsFont500.className}`}
                        >
                            <img alt="google" src="/images/apple.png" className="w-5 h-auto mr-2" />
                            Continue with Apple
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page