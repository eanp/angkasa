import Image from "next/image";

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

  if(!res.ok){
      throw new Error("Failed get data")
  }
  const data = await res.json()

  console.log(data)
  return data
}

export default async function Ticket({params}) {
  const data = await getData(params.ticket)
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
			<p>ticket : {params?.ticket ?? "-"}</p>
			<p>ticket : {data?.name ?? "-"}</p>
    </main>
  );
}
