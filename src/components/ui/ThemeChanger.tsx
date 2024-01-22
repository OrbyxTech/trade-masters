
'use client';

import { useEffect, useState } from "react"
import { Button } from "./button";
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

function ThemeChanger() {

    const [isClient, setIsClient] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            size="icon"
            variant="outline"
        >
            {
                isClient && theme === "light"
                    ?
                    <Moon width={18} height={18} strokeWidth={1.35} />
                    :
                    <Sun width={18} height={18} color="white" strokeWidth={1.35} />

            }
        </Button>
    )
}

export default ThemeChanger