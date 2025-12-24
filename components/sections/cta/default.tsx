import { ReactNode } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Button, type ButtonProps } from "../../ui/button"
import Glow from "../../ui/glow"
import { Section } from "../../ui/section"

interface CTAButtonProps {
    href: string
    text: string
    variant?: ButtonProps["variant"]
    icon?: ReactNode
    iconRight?: ReactNode
}

interface CTAProps {
    title?: string
    desctiption?: string
    buttons?: CTAButtonProps[] | false
    className?: string
}

export default function CTA({
    title = "Mulai Analisis Produkmu Sekarang",
    desctiption = "Dapatkan insight pasar dari Shopee dan Tokopedia hanya dalam hitungan menit. Tak perlu riset manual — cukup biarkan AI bekerja untukmu.",
    buttons = [
        {
            href: siteConfig.registerUrl,
            text: "Coba Gratis Sekarang",
            variant: "default",
        },
    ],
    className,
}: CTAProps) {
    return (
        <Section className={cn("group relative flex h-[600px] items-center justify-center overflow-hidden", className)}>
            <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
                <h2 className="max-w-[900px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">{title}</h2>
                <p className="text-md text-muted-foreground max-w-[900px] font-medium sm:text-lg">{desctiption}</p>
                {buttons !== false && buttons.length > 0 && (
                    <div className="flex justify-center gap-4">
                        {buttons.map((button, index) => (
                            <Button
                                key={index}
                                variant={button.variant || "default"}
                                size="lg"
                                asChild
                                className="hover:shadow-brand transition-all ease-out hover:scale-105 hover:shadow-[0_0_50px]">
                                <a href={button.href}>
                                    {button.icon}
                                    {button.text}
                                    {button.iconRight}
                                </a>
                            </Button>
                        ))}
                    </div>
                )}
            </div>
            <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
                <Glow variant="bottom" />
            </div>
        </Section>
    )
}
