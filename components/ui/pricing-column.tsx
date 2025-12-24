import { cva, type VariantProps } from "class-variance-authority"
import { CheckCircle2, CircleCheckBig } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"

import { cn } from "@/lib/utils"

import { Button } from "./button"
import { formatIDR } from "@/utils/currency"

const pricingColumnVariants = cva("max-w-container relative flex flex-col gap-6 overflow-hidden rounded-2xl p-8 shadow-xl", {
    variants: {
        variant: {
            default: "glass-1 to-transparent dark:glass-3",
            glow: "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
            "glow-brand":
                "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
            glass: "glass-2 p-8 rounded-2xl border border-white/5 hover:bg-brand/[0.03] transition",
            "glass-brand":
                "glass-2 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px] outline-brand outline hover:bg-brand/[0.03] transition",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export interface PricingColumnProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof pricingColumnVariants> {
    name: string
    icon?: ReactNode
    description: string
    price: number
    priceNote: string
    cta: {
        variant: "custom" | "default"
        label: string
        href: string
    }
    features: string[]
}

export function PricingColumn({ name, icon, description, price, priceNote, cta, features, variant, className, ...props }: PricingColumnProps) {
    return (
        <div className={cn(pricingColumnVariants({ variant, className }))} {...props}>
            {/* <hr
                className={cn(
                    "via-foreground/60 absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent",
                    variant === "glow-brand" && "via-brand",
                )}
            /> */}
            <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                    <h2 className="flex items-center gap-2 text-2xl font-bold">
                        {icon && <div className="text-muted-foreground flex items-center gap-2">{icon}</div>}
                        {name}
                    </h2>
                    <p className="text-muted-foreground max-w-full text-xs leading-relaxed">{description}</p>
                </div>
                <div className="flex items-center gap-3 lg:flex-col lg:items-start xl:flex-row xl:items-center">
                    <div className="flex items-baseline gap-1">
                        <span className="text-muted-foreground text-2xl font-bold">Rp. </span>
                        <span className="text-4xl font-bold">{formatIDR(price)}</span>
                    </div>
                    <div className="flex min-h-[40px] flex-col">
                        {price > 0 && (
                            <>
                                <span className="text-sm">/bulan</span>
                                {/* <span className="text-muted-foreground text-sm"> */}
                                {/*   plus local taxes */}
                                {/* </span> */}
                            </>
                        )}
                    </div>
                </div>
                <Button variant={cta.variant} size="lg" asChild className="transition-all ease-out hover:scale-105">
                    <Link href={cta.href}>{cta.label}</Link>
                </Button>
                <p className="text-muted-foreground min-h-[40px] w-full text-xs">{priceNote}</p>
                {/* <hr className="border-input" /> */}
            </div>
            <div>
                <ul className="flex flex-col gap-4">
                    {features.map(feature => (
                        <li key={feature} className="flex gap-3 text-sm">
                            <CheckCircle2 className="text-background mt-0.5 size-6 shrink-0 fill-green-500" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export { pricingColumnVariants }
