"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function FAQsSection() {
    const faqItems = [
        {
            id: "item-1",
            question: "Bagaimana cara membuat akun di platform ini?",
            answer: "Anda dapat mendaftar dengan email atau menggunakan akun Google/Apple. Setelah mendaftar, Anda langsung bisa mengakses semua fitur dasar secara gratis.",
        },
        {
            id: "item-2",
            question: "Apakah ada biaya untuk menggunakan layanan ini?",
            answer: "Platform ini menyediakan paket gratis dengan fitur terbatas. Untuk akses penuh dan fitur lanjutan, tersedia paket berlangganan bulanan atau tahunan.",
        },
        {
            id: "item-3",
            question: "Bisakah saya membatalkan atau mengubah paket langganan?",
            answer: "Ya, Anda dapat mengubah paket atau membatalkan langganan kapan saja melalui pengaturan akun. Perubahan berlaku di siklus pembayaran berikutnya.",
        },
        {
            id: "item-4",
            question: "Apakah data saya aman di platform ini?",
            answer: "Kami menggunakan enkripsi dan protokol keamanan standar industri untuk melindungi data Anda. Data Anda hanya digunakan untuk layanan yang Anda akses dan tidak dibagikan ke pihak ketiga tanpa izin.",
        },
        {
            id: "item-5",
            question: "Apakah tersedia dukungan jika saya mengalami masalah?",
            answer: "Tentu! Kami menyediakan pusat bantuan, dokumentasi lengkap, dan tim dukungan pelanggan yang siap membantu melalui chat atau email.",
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col items-center gap-4 px-4 text-center">
                    <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">FAQs</h2>
                    <p className="text-muted-foreground max-w-[600px] text-base font-medium">Temukan jawaban atas pertanyaan umum tentang layanan dan fitur kami.</p>
                </div>

                <div className="mx-auto mt-12 max-w-5xl">
                    <Accordion type="single" collapsible className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
                        {faqItems.map(item => (
                            <div className="group" key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>

                    {/* <p className="text-muted-foreground mt-6 px-8"> */}
                    {/*   Can't find what you're looking for? Contact our{" "} */}
                    {/*   <Link href="#" className="text-primary font-medium hover:underline"> */}
                    {/*     customer support team */}
                    {/*   </Link> */}
                    {/* </p> */}
                </div>
            </div>
        </section>
    )
}
