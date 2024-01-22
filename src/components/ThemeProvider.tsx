
'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { type ThemeProviderProps as NextThemeProviderProps } from "next-themes/dist/types"

function ThemeProvider({ children, ...props }: NextThemeProviderProps) {
    return (
        <NextThemeProvider {...props}>
            {children}
        </NextThemeProvider>
    )
}

export default ThemeProvider