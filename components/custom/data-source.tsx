import Image from "next/image"
import React from "react"

const DataSources: React.FC = () => {
    return (
        <section id="data-source" className="mb-16 scroll-mt-[40vh] border-y border-white/5 bg-[#020617] py-12 text-center">
            <p className="mb-10 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">Sumber Data Terpercaya</p>
            <div className="mx-auto grid w-full grid-cols-2 items-center justify-center gap-10 px-6 opacity-60 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0 md:w-[500px] md:gap-20 lg:w-[1000px] lg:grid-cols-4">
                <div className="group flex cursor-pointer items-center gap-3 text-xl font-bold text-white md:text-2xl">
                    <div className="flex items-center justify-center rounded-full transition-transform group-hover:scale-110">
                        <div className="relative h-14 w-14">
                            <Image src="/marketplace/shopee-new.webp" alt="data-source" fill className="absolute object-contain" />
                        </div>
                    </div>
                    Shopee
                </div>
                <div className="group flex cursor-pointer items-center gap-3 text-xl font-bold text-white md:text-2xl">
                    <div className="flex items-center justify-center rounded-full transition-transform group-hover:scale-110">
                        <div className="relative h-14 w-14">
                            <Image src="/marketplace/tokopedia.webp" alt="data-source" fill className="absolute object-contain" />
                        </div>
                    </div>
                    Tokopedia
                </div>
                <div className="group flex cursor-pointer items-center gap-3 text-xl font-bold text-white md:text-2xl">
                    <div className="flex items-center justify-center rounded-full transition-transform group-hover:scale-110">
                        <div className="relative h-14 w-14">
                            <Image src="/marketplace/lazada.webp" alt="data-source" fill className="absolute object-contain" />
                        </div>
                    </div>
                    Lazada
                </div>
                <div className="group flex cursor-pointer items-center gap-3 text-xl font-bold text-white md:text-2xl">
                    <div className="flex items-center justify-center rounded-full transition-transform group-hover:scale-110">
                        <div className="relative h-14 w-14">
                            <Image src="/marketplace/tiktok.webp" alt="data-source" fill className="absolute object-contain" />
                        </div>
                    </div>
                    TikTok
                </div>
            </div>
        </section>
    )
}

export default DataSources
