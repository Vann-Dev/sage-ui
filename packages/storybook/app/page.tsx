import Navbar from '@/components/navbar'
import { Code } from "@kokoro-ui/code"
import { Button } from "@kokoro-ui/button"
import Link from 'next/link'

export default function Home() {
    return (
        <main className='container'>
            <Navbar />

            <div className='grid gap-y-4 md:gap-y-9 justify-center md:mx-48 mt-40 lg:mt-44'>
                <div className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center inline-block'>
                    <h1>Lightweight UI Components for</h1>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 inline-block'>React</h1>
                </div>

                <Code className='bg-secondary mx-4 text-center font-medium border-[1px] border-white'>npm i @kokoro-ui/theme</Code>

                <Button variant='link' className=''>
                    <Link href={"/docs/index.html?path=/docs/getting-started-installation--docs"}>
                        See Documentation
                    </Link>
                </Button>
            </div>
        </main>
    )
}