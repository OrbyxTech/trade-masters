import Section from "@/components/ui/Section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

function page() {
    return (
        <div>
            <Section
                title="Partnership"
                showViewAllBtn={false}
            >
                <div className="flex max-md:flex-col items-center gap-8 justify-center">
                    <Image
                        alt=""
                        width={369}
                        height={183}
                        src={"/referal-min.png"}
                        className="w-56 h-auto object-center object-cover"
                    />

                    <div>
                        <p className="text-lg text-foreground font-medium">
                            Become Our Ambassador
                        </p>

                        <p className="text-xs text-foreground/80 font-normal max-w-prose mt-2">
                            Safirpropy is a person who introduces Propy to traders and receives various benefits from Propy, such as receiving a 5% commission from participating in the challenge of introduced people and...
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex items-center gap-x-2">
                    <Input placeholder="Enter your refeerral code" className="w-full max-w-xs text-xs" />
                    <Button size="sm">Submit</Button>
                </div>
            </Section >
        </div >
    )
}

export default page