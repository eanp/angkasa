import { Nav } from "@/components/nav";
import Image from "next/image";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Nav />
            <Image
                src="/illustration.png"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
            />
            <p>about</p>
        </main>
    );
}
