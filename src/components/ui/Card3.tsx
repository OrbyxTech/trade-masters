import Image from "next/image";


interface Props {
    title: string;
    img: string;
    value: string;
    subTitle: string;
    link?: string;
}

function Card3({ img, subTitle, title, value, link }: Props) {
    return (
        <div className="flex items-center gap-x-2 justify-between dark:bg-emptyBg rounded-xl p-2 border border-foreground/20">
            <div className="flex flex-col items-center justify-center">
                <div className="w-8 aspect-square relative">
                    <Image
                        alt=""
                        src={img}
                        fill
                    />
                </div>
                <p className="text-xs text-foreground/90 font-normal mt-1">{title}</p>
            </div>

            <div>
                <p className="text-sm font-medium text-foreground">{value}</p>
                <p className="text-xs text-foreground/70 font-normal mt-1">{subTitle}</p>
            </div>
        </div>
    )
}

export default Card3