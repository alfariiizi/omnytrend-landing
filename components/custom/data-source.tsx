import Image from "next/image"
import React from "react"

const DataSources: React.FC = () => {
    return (
        <section className="mb-16 border-y border-white/5 bg-[#020617] py-12 text-center">
            <p className="mb-10 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">Sumber Data Terpercaya</p>
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-60 grayscale transition-all duration-700 hover:grayscale-0 md:gap-20">
                <div className="group flex cursor-pointer items-center gap-3 text-2xl font-bold text-white">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                        <div className="relative h-15 w-15">
                            <Image src="/marketplace/shopee-new.webp" alt="data-source" fill className="absolute object-contain" />
                        </div>
                    </div>
                    Shopee
                </div>
                <div className="group flex cursor-pointer items-center gap-3 text-2xl font-bold text-white">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                        <div className="relative h-15 w-15">
                            <Image src="/marketplace/tokopedia.webp" alt="data-source" fill className="absolute object-contain" />
                        </div>
                    </div>
                    Tokopedia
                </div>
                <div className="group flex cursor-pointer items-center gap-3 text-2xl font-bold text-white">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                        <div className="relative h-15 w-15">
                            <Image src="/marketplace/lazada.webp" alt="data-source" fill className="absolute object-contain" />
                        </div>
                    </div>
                    Lazada
                </div>
                <div className="group flex cursor-pointer items-center gap-3 text-2xl font-bold text-white">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                        <div className="relative h-15 w-15">
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
