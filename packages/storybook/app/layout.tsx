import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Kokoro UI - Fast and Clean built-in components',
    description: 'Make your dream website with built-in components using Kokoro UI',
    keywords: "Tailwind CSS, Next.js, components, Tailwind Blocks, library, ui, Responsive Design, CSS Framework, React Framework, Web Development, Frontend, Customization, Utility-first, CSS-in-JS, Design System, Atomic Design, JSX, Theming, Modern UI, Mobile-First, Utility Classes, Design Patterns, Optimized Performance, Atomic Components, Component Library, React Components, UI Blocks, Design Tokens, Dark Mode, Integration, Rapid Prototyping, Animation, Styled Components, Code Splitting",
    robots: "index, follow",
    authors: [
        {
            name: "Vann-Dev",
            url: "https://github.com/Vann-Dev"
        }
    ]
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gradient-to-br from-[#8632fc] from-50% to-[#32A6FC] to-90% min-h-screen flex justify-center py-5 md:py-6 lg:py-8 px-6 md:px-9`}>
                {children}
            </body>
        </html>
    )
}