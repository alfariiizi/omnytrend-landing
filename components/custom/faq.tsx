"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
    question: string
    answer: string
    isOpen: boolean
    onToggle: () => void
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className={`rounded-lg border-2 bg-[#0B1120] transition-all duration-300 ${isOpen ? "border-brand/30" : "border-white/5"}`}>
            <button
                onClick={onToggle}
                className="hover:text-brand flex w-full items-center justify-between p-5 text-left font-medium text-gray-200 transition"
                aria-expanded={isOpen}>
                <span>{question}</span>
                <ChevronDown size={20} className={`text-brand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-sm text-gray-400">{answer}</div>
                </div>
            </div>
        </div>
    )
}

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: "Bagaimana cara mulai?",
            answer: 'Klik tombol "Coba Gratis", daftar dalam 1 menit, dan Anda langsung mendapatkan akses ke fitur dasar kami.',
        },
        {
            question: "Apakah data real-time?",
            answer: "Ya, sistem kami melakukan update data secara berkala dan real-time saat Anda melakukan request spesifik untuk kategori produk tertentu.",
        },
        {
            question: "Apakah support marketplace Indonesia?",
            answer: "OmniTrend dioptimalkan untuk marketplace lokal utama seperti Shopee, Tokopedia, Lazada, dan Blibli.",
        },
    ]

    const toggleItem = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index))
    }

    return (
        <section className="border-t border-white/5 px-6 py-20">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-12 text-center text-5xl leading-tight font-bold">Pertanyaan Pengguna</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} onToggle={() => toggleItem(index)} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
