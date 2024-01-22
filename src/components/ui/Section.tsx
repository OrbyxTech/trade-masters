

import Link from "next/link";
import { type ReactNode } from "react"

interface Props {
    title?: string;
    subTitle?: string;
    showViewAllBtn?: boolean;
    viewAllBtnText?: string;
    children?: ReactNode;
}

function Section({ children, title, showViewAllBtn = true, viewAllBtnText, subTitle }: Props) {
    return (
        <div className="bg-white dark:bg-section p-5 rounded-xl">
            <div className="flex items-center justify-between mb-4">
                <div>
                    {
                        title
                            ?
                            <p className="text-sm text-foreground font-normal">{title}</p>
                            :
                            null
                    }
                    {
                        subTitle
                            ?
                            <p className="text-xs text-foreground/60 font-normal mt-1.5">
                                {subTitle}
                            </p>
                            :
                            null
                    }
                </div>

                {
                    showViewAllBtn
                        ?
                        <Link href="" className="text-xs font-normal text-red-500 dark:text-rose-500">
                            {
                                viewAllBtnText
                                    ?
                                    viewAllBtnText
                                    :
                                    "View All"
                            }
                        </Link>
                        :
                        null
                }
            </div>
            {children}
        </div>
    )
}

export default Section