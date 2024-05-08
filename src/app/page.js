import { Nav } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    if(!res.ok){
        throw new Error("Failed get data")
    }
    const data = await res.json()

    console.log(data)
    return data
}

export default async function Home() {
    const data = await getData()
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
            <h1>Home</h1>
            {data ? "success " : "failed"}
            {data?.map((item,key)=><Link href={`/ticket/${item.id}`} key={key} ke>{item.name}</Link>)}
        </main>
    );
}
