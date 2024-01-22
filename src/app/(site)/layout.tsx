import { type ReactNode } from "react"
import Hero from "./components/Hero";
import 'keen-slider/keen-slider.min.css'

interface Props {
    children: ReactNode;
}

function layout({ children }: Props) {
    return (
        <div className="bg-black min-h-screen">
            {/* <TopNavigation /> */}
            <Hero />
            {children}
        </div>
    )
}

export default layout