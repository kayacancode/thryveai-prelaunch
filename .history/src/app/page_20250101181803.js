import Image from "next/image";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1>Welcome</h1>
     <Image src="/thryvemainlogowhite.png" alt="Next.js logo" width={180} height={38} />
    </div>
  );
}
