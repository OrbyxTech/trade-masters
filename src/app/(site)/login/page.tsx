import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google"
import { Button } from "@/components/ui/button"
import Divider from "@/components/ui/Divider"
import { Input } from "@/components/ui/input"

const poppinsFont400 = Poppins({ weight: "400", subsets: ["latin"] })
const poppinsFont500 = Poppins({ weight: "500", subsets: ["latin"] })

function page() {
    return (
        <div
            className="w-full h-screen grid grid-cols-[6fr_10fr] overflow-hidden"
        >
            <div className="relative">
                <Image
                    alt="login"
                    fill
                    src="/images/login/login-image.png"
                    className="object-center object-cover"
                />

                <div className="absolute top-24 left-8 right-8">
                    <h2
                        className={`text-3xl 2xl:text-4xl text-white ${poppinsFont500.className}`}
                    >
                        Trade with us
                    </h2>

                    <p
                        className={`text-sm 2xl:text-lg text-black/90 mt-3 max-w-[35ch] ${poppinsFont400.className}`}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, laboriosam corporis. Iste debitis eligendi id repudiandae doloribus eaque nulla corporis ut totam soluta! Excepturi, voluptas.
                    </p>
                </div>
            </div>

            <main
                className="overflow-y-auto p-6"
            >
                <p className={`text-xs xl:text-sm text-black/70 text-right ${poppinsFont400.className}`}>
                    Don't have an account?&nbsp;
                    <Link href="/signup" className={`text-black/95 underline`}>
                        Sign up
                    </Link>
                </p>

                <div
                    className="mt-12 w-full px-6 max-w-sm xl:max-w-lg maw mx-auto"
                >

                    <div className="w-5 h-5 rounded-full bg-[#C4C4C4]"></div>

                    <p
                        className={`text-lg mt-5 text-[#333333] ${poppinsFont500.className}`}
                    >
                        Sign in
                    </p>

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

                    <Divider text="OR" className="my-6" />

                    <div className="space-y-3">
                        <div>
                            <label
                                htmlFor="username-email"
                                className={`text-xs text-black/70 mb-1.5 block ${poppinsFont400.className}`}
                            >
                                User name or email address
                            </label>

                            <Input
                                id="username-email"
                                type="text"
                                variant="bordered"
                                className=""
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className={`text-xs text-black/70 mb-1.5 block ${poppinsFont400.className}`}
                            >
                                Your password
                            </label>

                            <Input
                                id="password"
                                type="text"
                                variant="bordered"
                                className=""
                            />

                            <Link
                                href="/password-recovery"
                                className={`text-xs text-black/90 w-full block ${poppinsFont400.className} text-right mt-1.5 underline`}
                            >
                                Forget your password
                            </Link>
                        </div>

                        <div>
                            <Button className={`rounded-full px-16 xl:px-24  ${poppinsFont400.className}`}>
                                Sign in
                            </Button>
                            <p className={`text-xs xl:text-sm text-black/70 mt-2 ${poppinsFont400.className}`}>
                                Don't have an account?&nbsp;
                                <Link href="/signup" className={`text-black/95 underline`}>
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page