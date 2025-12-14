"use client"

import { ArrowRight, ArrowRightIcon } from "lucide-react"
import { ReactNode } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Badge } from "../../ui/badge"
import { Button, type ButtonProps } from "../../ui/button"
import Glow from "../../ui/glow"
import { Mockup, MockupFrame } from "../../ui/mockup"
import Screenshot from "../../ui/screenshot"
import { Section } from "../../ui/section"
import { TextLoop } from "@/components/motion-primitives/text-loop"
import ScreenshotCustom from "@/components/custom/screenshot"

interface HeroButtonProps {
    href: string
    text: string
    variant?: ButtonProps["variant"]
    icon?: ReactNode
    iconRight?: ReactNode
    arrow?: boolean
}

interface HeroProps {
    title?: string
    description?: string
    mockup?: ReactNode | false
    badge?: ReactNode | false
    buttons?: HeroButtonProps[] | false
    className?: string
}

export default function Hero({
    title = "",
    description = "Cukup tanya, dan biarkan AI menganalisis produk untukmu — mulai dari tren, performa, hingga rekomendasi strategi penjualan.",
    mockup = <ScreenshotCustom />,
    badge = (
        <Badge variant="outline" className="animate-appear border-brand/30 bg-brand/10">
            <span className="bg-brand-teal flex h-2 w-2 animate-pulse rounded-full"></span>
            <span className="text-muted-foreground text-xs font-medium tracking-wide">Free akses selama 14 hari !</span>
            <a href={siteConfig.registerUrl} className="flex items-center gap-1">
                Daftar Sekarang
                <ArrowRightIcon className="size-3" />
            </a>
        </Badge>
    ),
    buttons = [
        {
            href: siteConfig.registerUrl,
            text: "Coba Gratis Sekarang",
            variant: "default",
            arrow: true,
        },
        {
            href: siteConfig.loginUrl,
            text: "Pelajari Lebih Lanjut",
            variant: "custom",
            arrow: false,
        },
    ],
    className,
}: HeroProps) {
    return (
        <Section className={cn("fade-bottom mt-20 overflow-hidden bg-transparent md:mt-10", className)}>
            <div className="max-w-container mx-auto -mt-10 flex flex-col gap-12 pt-0">
                <div className="flex flex-col items-center gap-6 text-center">
                    {badge !== false && badge}
                    <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-3xl leading-tight font-bold tracking-tight text-balance whitespace-pre-wrap text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight sm:tracking-tight md:text-7xl md:leading-tight">
                        Riset{" "}
                        <TextLoop
                            className="overflow-y-clip"
                            transition={{
                                type: "spring",
                                stiffness: 900,
                                damping: 80,
                                mass: 10,
                            }}
                            variants={{
                                initial: {
                                    y: 20,
                                    rotateX: 90,
                                    opacity: 0,
                                    filter: "blur(4px)",
                                },
                                animate: {
                                    y: 0,
                                    rotateX: 0,
                                    opacity: 1,
                                    filter: "blur(0px)",
                                },
                                exit: {
                                    y: -20,
                                    rotateX: -90,
                                    opacity: 0,
                                    filter: "blur(4px)",
                                },
                            }}>
                            <span className="text-foreground">Produk</span>
                            <span className="text-foreground">Pasar</span>
                            <span className="text-foreground">Kategori</span>
                            <span className="text-foreground">Keyword</span>
                        </TextLoop>
                        <br />
                        <span className="bg-gradient-to-r from-[#00E7BE] via-[#2563EB] to-[#995CFF] bg-clip-text text-transparent">Hanya Butuh 2 Menit</span>
                    </h1>
                    <p className="animate-appear text-muted-foreground relative z-10 mb-4 max-w-sm text-sm leading-relaxed font-medium opacity-0 delay-100 md:mb-10 md:max-w-2xl md:text-lg">
                        {description}
                    </p>
                    {buttons !== false && buttons.length > 0 && (
                        <div className="animate-appear relative z-10 flex flex-col justify-center gap-4 opacity-0 delay-300 md:flex-row">
                            {buttons.map((button, index) => (
                                <Button key={index} variant={button.variant || "default"} size="lg" asChild className="inline-flex rounded-full md:px-8 md:py-7">
                                    <a href={button.href} className="">
                                        {button.icon}
                                        {button.text}
                                        {button.iconRight}
                                        {button.arrow && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
                                    </a>
                                </Button>
                            ))}
                        </div>
                    )}
                    {mockup !== false && (
                        <div className="relative w-full pt-12">
                            {/* <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              /> */}
                            <Mockup type="responsive" className="bg-background/90 mx-auto w-full max-w-5xl overflow-visible rounded-xl border-0">
                                {mockup}
                            </Mockup>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    )
}
