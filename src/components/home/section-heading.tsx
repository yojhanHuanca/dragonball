import { Badge } from "@/components/ui/badge"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <Badge variant="accent">{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-black tracking-normal text-balance sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
    </div>
  )
}
