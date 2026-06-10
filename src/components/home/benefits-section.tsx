import { CheckCircle2 } from "lucide-react"

import { SectionHeading } from "@/components/home/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { benefits } from "@/data/home"

export function BenefitsSection() {
  return (
    <section className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Beneficios"
          title="Base premium lista para escalar."
          description="La homepage queda organizada por responsabilidad y preparada para conectar formularios, APIs o nuevas secciones."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit) => (
            <Card key={benefit}>
              <CardContent className="flex items-start gap-4 p-5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                <p className="font-medium leading-7">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
