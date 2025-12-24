import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import Marquee from "react-fast-marquee"

interface TestimonialsSectionProps {
    title: string
    description: string
    testimonials: Array<{
        author: TestimonialAuthor
        text: string
        href?: string
    }>
    className?: string
}

export function TestimonialsSection({ title, description, testimonials, className }: TestimonialsSectionProps) {
    return (
        <section className={cn("bg-background text-foreground", "px-0 py-12 sm:py-24 md:py-32", className)}>
            <div className="max-w-container mx-auto flex flex-col items-center gap-4 text-center sm:gap-16">
                <div className="mb-10 flex flex-col items-center gap-4 px-4 sm:gap-8 md:mb-0">
                    <h2 className="max-w-[720px] text-3xl leading-relaxed font-bold sm:text-5xl sm:leading-relaxed">{title}</h2>
                    <p className="text-muted-foreground max-w-[600px] text-base font-medium">{description}</p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div className="max-w-container mx-auto">
                        <Marquee
                            autoFill
                            speed={50}
                            pauseOnHover
                            gradient
                            gradientWidth={50}
                            gradientColor="var(--background)"
                            // className="max-h-[264px]"
                        >
                            {testimonials.map((item, key) => (
                                <div key={`testimonial-item-${key + 1}`} className="mx-2 my-2 flex h-fit flex-col justify-between gap-2 px-2">
                                    <TestimonialCard {...item} />
                                </div>
                            ))}
                        </Marquee>
                    </div>

                    <div className="from-background pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r sm:block" />
                    <div className="from-background pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l sm:block" />
                </div>
            </div>
        </section>
    )
}
