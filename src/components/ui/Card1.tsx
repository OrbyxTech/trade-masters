import Image from "next/image";


interface Props {
    title: string;
    subTitle: string;
    img: string;
}

function Card1({ img, subTitle, title }: Props) {
    return (
        <div className="bg-white dark:bg-section rounded-xl p-2 flex items-center gap-x-2">
            <div className="w-11 aspect-square rounded-xl dark:bg-emptyBg grid place-items-center">
                <Image
                    alt=""
                    src={img}
                    width={130}
                    height={130}
                    className="w-7 h-7 object-center object-cover"
                />
            </div>

            <div>
                <p className="text-sm text-foreground font-medium">{title}</p>
                <p className="text-xs text-foreground/70 font-normal mt-0.5">{subTitle}</p>
            </div>
        </div>
    )
}

export default Card1