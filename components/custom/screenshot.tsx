import Image from "next/image"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export default function ScreenshotCustom({ className }: { className?: string }) {
    return (
        <div className={cn("w-full", className)}>
            <div className="group perspective-1000 relative mx-auto">
                {/* Glow behind mockup */}
                <div className="from-brand-purple to-brand-teal absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-20 blur transition duration-1000 group-hover:opacity-30"></div>

                {/* Main Mockup Container - Solid Elegant Background */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0F172A] shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                    {/* Fake UI Header */}
                    <div className="flex h-12 items-center justify-between border-b border-white/5 bg-[#1E293B] px-6">
                        <div className="flex space-x-2">
                            <div className="h-3 w-3 rounded-full bg-[#FF5F56]"></div>
                            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]"></div>
                            <div className="h-3 w-3 rounded-full bg-[#27C93F]"></div>
                        </div>
                        <div className="h-2 w-1/3 rounded-full bg-white/5"></div>
                        <div className="h-4 w-4 rounded-full bg-white/10"></div>
                    </div>

                    {/* Fake UI Content */}
                    <div className="relative flex h-[180px] flex-col items-center justify-center bg-gradient-to-b from-[#0F172A] to-[#020617] p-8 md:h-[344px] md:p-12 lg:h-[464px] xl:h-[490px]">
                        <Image src="/dashboard-analisis.png" alt={`OmniDashboard ${siteConfig.name}`} fill className="absolute object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}
