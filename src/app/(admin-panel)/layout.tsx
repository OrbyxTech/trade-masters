
import { type ReactNode } from "react"
import SideBarNavigation from "./components/SideBarNavigation";
import MainSectionLayout from "./components/MainSectionLayout";

interface Props {
    children: ReactNode;
}

function layout({ children }: Props) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[12rem_1fr] h-screen w-full overflow-hidden bg-[#f2f2f2] dark:bg-emptyBg">

            <div className="bg-white dark:bg-section overflow-y-auto py-4 px-1.5 max-lg:hidden">
                <SideBarNavigation />
            </div>

            <main className="overflow-y-auto p-2 sm:p-4">
                <MainSectionLayout>
                    {children}
                </MainSectionLayout>
            </main>

        </div>
    )
}

export default layout