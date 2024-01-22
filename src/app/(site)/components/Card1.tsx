import Image from "next/image";

interface Props {
    img: string;
    title: string;
    subTitle: string;
}

function Card1({ img, subTitle, title }: Props) {
    return (
        <div className="p-3 rounded-xl hover:bg-white/5 transition-colors duration-200">
            <div className="w-16 aspect-square rounded-full bg-emptyBg grid place-items-center mx-auto">
                <Image
                    alt=""
                    src={img}
                    width={150}
                    height={150}
                    className="w-10 aspect-square object-center object-cover"
                />
            </div>

            <p className="text-sm text-center text-white font-medium mt-3.5">{title}</p>
            <p className="text-xs text-center text-white/50 font-normal mt-2">{subTitle}</p>
        </div>
    )
}

export default Card1