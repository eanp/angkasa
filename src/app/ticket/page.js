import Image from "next/image";

export default function Ticket() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Image
              src="/illustration.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
			<p>ticket : index</p>
    </main>
  );
}
