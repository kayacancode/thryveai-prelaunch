import Image from "next/image";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <Image src="/thryvemainlogowhite.png" alt="Next.js logo" width={180} height={38} />
     <h1 className="text-lg">Coming Soon</h1>

    </div>
  );
}
