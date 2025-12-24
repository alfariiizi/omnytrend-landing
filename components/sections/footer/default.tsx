import { ReactNode } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import OmniTrend from "../../logos/omnitrend"
import { Footer, FooterBottom, FooterColumn, FooterContent } from "../../ui/footer"
import { ModeToggle } from "../../ui/mode-toggle"

interface FooterLink {
    text: string
    href: string
}

interface FooterColumnProps {
    title: string
    links: FooterLink[]
}

interface FooterProps {
    logo?: ReactNode
    name?: string
    columns?: FooterColumnProps[]
    copyright?: string
    policies?: FooterLink[]
    showModeToggle?: boolean
    className?: string
}

export default function FooterSection({
    logo = <OmniTrend className="h-10 w-10" />,
    name = siteConfig.name,
    columns = [
        {
            title: "Menu Utama",
            links: [
                { text: "OmniTrend", href: "#header" },
                { text: "Sumber Data", href: "#data-source" },
                { text: "AI Driven", href: "#ai-driven" },
                { text: "Harga", href: "#pricing" },
                { text: "Pengalaman Pengguna", href: "#testimonials" },
                { text: "Sering Ditanyakan", href: "#faq" },
            ],
        },
        {
            title: "Lainnya",
            links: [
                { text: "About", href: siteConfig.url },
                { text: "Careers", href: siteConfig.url },
            ],
        },
        {
            title: "Social Media",
            links: [
                { text: "Discord", href: siteConfig.url },
                { text: "Twitter", href: siteConfig.url },
                { text: "Instagram", href: siteConfig.links.github },
            ],
        },
    ],
    copyright = `© ${new Date().getUTCFullYear()} Ozone Digiverse. All rights reserved`,
    policies = [
        { text: "Privacy Policy", href: siteConfig.url },
        { text: "Terms of Service", href: siteConfig.url },
    ],
    showModeToggle = true,
    className,
}: FooterProps) {
    return (
        <Footer className="border-border dark:border-border/15 relative mx-auto w-full max-w-[1000px] border-t p-8">
            <div className="bg-brand absolute -top-1 right-1/2 h-2 w-10 translate-x-1/2 rounded-full"></div>
            <FooterContent className="gap-10 pt-30 pb-10 font-medium md:gap-8">
                <FooterColumn className="col-span-2 mb-14">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-2">{logo}</div>
                        <div className="flex flex-col gap-3">
                            <span className="text-muted-foreground text-sm font-medium">Biarkan AI menganalisis produk untukmu </span>
                            <div>
                                <span className="text-sm">Made by </span>
                                <span className="text-sm font-black">{name}</span>
                            </div>
                        </div>
                    </div>
                </FooterColumn>
                {columns.map((column, index) => (
                    <FooterColumn key={index}>
                        <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                        {column.links.map((link, linkIndex) => (
                            <a key={linkIndex} href={link.href} className="text-muted-foreground text-sm">
                                {link.text}
                            </a>
                        ))}
                    </FooterColumn>
                ))}
            </FooterContent>
            <FooterBottom className="py-8 text-sm font-medium">
                <div>{copyright}</div>
                <div className="flex items-center gap-4">
                    {policies.map((policy, index) => (
                        <a key={index} href={policy.href}>
                            {policy.text}
                        </a>
                    ))}
                    {showModeToggle && <ModeToggle />}
                </div>
            </FooterBottom>
        </Footer>
    )
}
