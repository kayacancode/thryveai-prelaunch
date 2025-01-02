import Image from "next/image";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <Image src="/thryvemainlogowhite.png" alt="Next.js logo" width={500} height={85} />
     <h1 className="text-2xl">Coming Soon</h1>

    </div>
  );
}
