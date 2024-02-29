
import Image from "next/image"
import loader from "@/public/vercel.svg"
const Loading = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex justify-center bg-slate-900 z-10 items-center">

        <section className="flex flex-col justify-center items-center gap-20 w-80 h-80">
            <h1 className="font-bold text-3xl font-white">COINTRACK</h1>
            <Image src={loader} className="animate-spin" alt="Loader" width={100} height={100} />
        </section>
    </div>
  )
}

export default Loading