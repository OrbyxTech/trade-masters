import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

interface Props {
    title: string;
    subTitle: string;
    img: string;
    link: string;
    btnText?: string;
}

function Card2({ img, link, subTitle, title, btnText }: Props) {
    return (
        <div className="dark:bg-emptyBg p-3 rounded-xl border border-foreground/20 flex flex-col gap-y-1">
            <div className="flex items-center justify-between">
                <p className="text-sm text-foreground font-medium">
                    {title}
                </p>
                {
                    img
                        ?
                        <div className="relative w-7 aspect-square">
                            <Image
                                alt=""
                                src={img}
                                fill
                            />
                        </div>
                        :
                        null
                }
            </div>

            <p className="text-xs text-foreground/60 font-normal mt-2">{subTitle}</p>

            {
                btnText
                    ?
                    <Button asChild size="sm" className="mt-5">
                        <Link href={link}>
                            {btnText}
                        </Link>
                    </Button>
                    :
                    null

            }
        </div>
    )
}

export default Card2