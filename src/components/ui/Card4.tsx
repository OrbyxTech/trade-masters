import Image from "next/image";


interface Props {
    title: string;
    img1: string;
    img2: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

function Card4({ img1, img2, text1, text2, text3, text4, title }: Props) {
    return (
        <div className="w-full p-3 rounded-xl dark:bg-emptyBg relative">

            <div className="w-7 aspect-square mx-auto absolute top-2.5 right-2.5">
                <Image
                    alt=""
                    fill
                    src={img2}
                />
            </div>


            <div className="w-10 aspect-square relative mx-auto">
                <Image
                    alt=""
                    fill
                    src={img1}
                />
            </div>

            <p className="text-xs text-center text-foreground font-medium mt-2">{title}</p>

            <div className="mt-4 grid grid-cols-3 gap-3 w-full">

                <div>
                    <p className="text-xs text-foreground font-normal">{text1}</p>
                    <p className="text-xs text-foreground/80 font-normal mt-1">{text2}</p>
                </div>

                <div>
                    <p className="text-xs text-foreground font-normal">{text3}</p>
                    <p className="text-xs text-foreground/80 font-normal mt-1">{text4}</p>
                </div>

            </div>
        </div>
    )
}

export default Card4