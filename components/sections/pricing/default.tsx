import { Sparkles, User, Users } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column"
import { Section } from "../../ui/section"

interface PricingProps {
    title?: string | false
    description?: string | false
    plans?: PricingColumnProps[] | false
    className?: string
}

export default function Pricing({
    title = "Investasi Cerdas untuk Bisnis",
    description = "Mulai dari gratis hingga skala bisnis. Nikmati analisis produk yang lebih cepat, lebih akurat, dan disesuaikan dengan intensitas risetmu.",
    plans = [
        {
            name: "Gratis",
            icon: <Sparkles className="mr-2 size-6" />,
            description: "Cocok untuk pengguna baru yang ingin mencoba analisis produk dengan cepat.",
            price: 0,
            priceNote: "Tanpa biaya, cukup daftar dan langsung mulai.",
            cta: {
                variant: "custom",
                label: "Mulai Sekarang",
                href: siteConfig.registerUrl,
            },
            features: ["Hingga 3 analisis produk per hari", "Data dasar dari Shopee & Tokopedia"],
            variant: "glass",
        },
        {
            name: "Pro",
            icon: <User className="mr-2 size-6 text-green-500" />,
            description: "Untuk penjual online yang ingin memahami performa pasar dengan lebih dalam.",
            price: 79000,
            priceNote: "Bayar bulanan batalkan kapan pun.",
            cta: {
                variant: "default",
                label: "Beli Sekarang",
                href: siteConfig.pricing.pro,
            },
            features: [
                "Hingga 40 analisis produk per hari",
                "Data dasar dari Shopee & Tokopedia",
                "Data penjualan & tren historis",
                "AI rekomendasi strategi harga",
                "Simpan riwayat chat tanpa batas",
                "Grafik performa produk real-time",
                "Rekomendasi produk populer mingguan",
            ],
            variant: "glass-brand",
        },
        {
            name: "Bisnis",
            icon: <Users className="text-brand-purple mr-2 size-6" />,
            description: "Untuk tim atau brand yang butuh riset mendalam dan kolaborasi multi-user.",
            price: 249000,
            priceNote: "Termasuk laporan mingguan otomatis & support prioritas.",
            cta: {
                variant: "default",
                label: "Beli Sekarang",
                href: siteConfig.pricing.team,
            },
            features: [
                "Semua fitur Pro",
                "Hingga 120 analisis produk per hari (5× kapasitas Pro)",
                "Laporan analisis dalam format PDF & Excel",
                // "Integrasi API Marketplace",
                "Support prioritas",
            ],
            variant: "glass",
        },
    ],
    className = "",
}: PricingProps) {
    return (
        <Section className={cn("mt-20", className)}>
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-20">
                {(title || description) && (
                    <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
                        {title && <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">{title}</h2>}
                        {description && <p className="text-muted-foreground max-w-[600px] text-base font-medium">{description}</p>}
                    </div>
                )}
                {plans !== false && plans.length > 0 && (
                    <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {plans.map(plan => (
                            <PricingColumn
                                key={plan.name}
                                name={plan.name}
                                icon={plan.icon}
                                description={plan.description}
                                price={plan.price}
                                priceNote={plan.priceNote}
                                cta={plan.cta}
                                features={plan.features}
                                variant={plan.variant}
                                className={plan.className}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Section>
    )
}
