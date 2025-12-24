import { siteConfig } from "@/config/site"

import { Section } from "../../ui/section"

interface StatItemProps {
    label?: string
    value: string | number
    suffix?: string
    description?: string
    color?: string
}

interface StatsProps {
    items?: StatItemProps[] | false
    className?: string
}

export default function Stats({
    items = [
        {
            label: "Digunakan oleh",
            value: Math.round(2400 / 100) / 10,
            suffix: "k",
            description: "pengguna aktif di platform kami",
            color: "text-brand",
        },
        {
            label: "Diproses",
            value: Math.round(60000 / 100) / 10,
            suffix: "k",
            description: "pesan AI yang diproses setiap hari",
            color: "text-brand-purple",
        },
        {
            label: "Dibuat",
            value: 5,
            suffix: "k",
            description: "proyek atau dokumen yang dibuat oleh pengguna",
            color: "text-brand",
        },
        {
            label: "Fitur",
            value: 4,
            suffix: "+",
            description: "modul dan fitur yang tersedia di platform",
            color: "text-brand-teal",
        },
    ],
    className,
}: StatsProps) {
    return (
        <Section id="stats" className={`scroll-mt-[40vh] ${className ?? ""}`}>
            <div className="container mx-auto max-w-[960px]">
                {items !== false && items.length > 0 && (
                    <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
                        {items.map((item, index) => (
                            <div key={index} className="group flex cursor-default flex-col items-start gap-3 text-left">
                                {item.label && (
                                    <div className="mb-2 text-xs font-semibold tracking-widest text-gray-500 uppercase transition-colors group-hover:text-gray-300">
                                        {item.label}
                                    </div>
                                )}
                                <div className="flex items-baseline gap-2">
                                    <div className="inline-block text-4xl font-bold text-white transition-transform duration-300 group-hover:scale-110">{item.value}</div>
                                    {item.suffix && <div className={`${item.color} text-brand ml-0.5 text-2xl font-semibold`}>{item.suffix}</div>}
                                </div>
                                {item.description && <div className="text-muted-foreground text-sm font-semibold text-pretty">{item.description}</div>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Section>
    )
}
