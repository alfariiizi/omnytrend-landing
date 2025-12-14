import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
    name: string
    handle: string
    avatar: string
}

export interface TestimonialCardProps {
    author: TestimonialAuthor
    text: string
    href?: string
    className?: string
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
    const Card = href ? "a" : "div"

    return (
        <Card
            {...(href ? { href } : {})}
            className={cn(
                "glass-1 flex flex-col rounded-lg border-none",
                "glass-2 hover:bg-brand/[0.03] rounded-2xl p-8 outline outline-white/5 transition",
                "p-4 text-start sm:p-6",
                "hover:from-brand/60 hover:to-brand/20 hover:outline-brand hover:outline-2",
                "max-w-[320px] sm:max-w-[320px]",
                "transition-colors duration-300",
                className,
            )}>
            <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                    <AvatarImage src={author.avatar} alt={author.name} />
                </Avatar>
                <div className="flex flex-col items-start">
                    <h3 className="text-md leading-none font-semibold">{author.name}</h3>
                    <p className="text-muted-foreground text-sm">{author.handle}</p>
                </div>
            </div>
            <p className="sm:text-md text-muted-foreground mt-4 text-xs leading-relaxed">{text}</p>
        </Card>
    )
}
