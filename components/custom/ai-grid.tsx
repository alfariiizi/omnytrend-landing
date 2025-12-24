import React from "react"
import { Zap, Database, BarChart3, MessageCircle, PieChart, Search, ShieldCheck, Rocket } from "lucide-react"

const features = [
    {
        icon: <Zap size={24} />,
        title: "Tanpa Input Manual",
        desc: "Otomatisasi pengumpulan data tanpa ribet.",
        color: "text-brand-teal",
        bg: "bg-brand-teal/10",
        shadow: "shadow-[0_0_15px_rgba(0,231,190,0.1)]",
        border: "hover:border-brand-teal/30",
    },
    {
        icon: <Database size={24} />,
        title: "Scraping Cerdas",
        desc: "Ekstrak harga & produk presisi tinggi.",
        color: "text-brand",
        bg: "bg-brand/10",
        shadow: "shadow-[0_0_15px_rgba(37,99,235,0.1)]",
        border: "hover:border-brand/30",
    },
    {
        icon: <BarChart3 size={24} />,
        title: "Analisis AI",
        desc: "Insight mendalam dari big data.",
        color: "text-brand-purple",
        bg: "bg-brand-purple/10",
        shadow: "shadow-[0_0_15px_rgba(153,92,255,0.1)]",
        border: "hover:border-brand-purple/30",
    },
    {
        icon: <MessageCircle size={24} />,
        title: "Chat AI",
        desc: "Tanya jawab data dalam bahasa manusia.",
        color: "text-brand",
        bg: "bg-brand/10",
        shadow: "shadow-[0_0_15px_rgba(29,78,216,0.1)]",
        border: "hover:border-brand/30",
    },
    {
        icon: <PieChart size={24} />,
        title: "Laporan Visual",
        desc: "Grafik otomatis yang mudah dipahami.",
        color: "text-brand-teal",
        bg: "bg-brand-teal/10",
        shadow: "shadow-[0_0_15px_rgba(0,231,190,0.1)]",
        border: "hover:border-brand-teal/30",
    },
    {
        icon: <Search size={24} />,
        title: "Real-time",
        desc: "Pantau kompetitor detik ini juga.",
        color: "text-brand",
        bg: "bg-brand/10",
        shadow: "shadow-[0_0_15px_rgba(37,99,235,0.1)]",
        border: "hover:border-brand/30",
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Keamanan",
        desc: "Privasi data Anda adalah prioritas kami.",
        color: "text-brand-purple",
        bg: "bg-brand-purple/10",
        shadow: "shadow-[0_0_15px_rgba(153,92,255,0.1)]",
        border: "hover:border-brand-purple/30",
    },
    {
        icon: <Rocket size={24} />,
        title: "Terus Belajar",
        desc: "Model AI berkembang setiap hari.",
        color: "text-brand",
        bg: "bg-brand/10",
        shadow: "shadow-[0_0_15px_rgba(29,78,216,0.1)]",
        border: "hover:border-brand/30",
    },
]

const AiGrid: React.FC = () => {
    return (
        <section id="ai-driven" className="scroll-mt-[10vh] bg-gradient-to-b from-[#020617] to-[#0B1120] px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-20 flex flex-col gap-4 text-center text-4xl font-bold md:text-5xl">
                    Digerakkan
                    <span className="text-brand-purple">Sepenuhnya Oleh AI</span>
                </h2>

                <div className="grid gap-6 md:grid-cols-4">
                    {features.map((feature, idx) => (
                        <div key={idx} className={`rounded-2xl border-2 border-white/5 bg-white/[0.02] p-6 transition duration-300 hover:bg-white/[0.05] ${feature.border} group`}>
                            <div
                                className={`h-12 w-12 ${feature.bg} mb-4 flex items-center justify-center rounded-lg ${feature.color} transition duration-300 group-hover:scale-110 ${feature.shadow}`}>
                                {feature.icon}
                            </div>
                            <h4 className="mb-2 font-semibold text-white">{feature.title}</h4>
                            <p className="text-sm text-gray-400">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AiGrid
