import { useState } from "react"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"

import { SectionHeading } from "@/components/home/section-heading"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/home"

export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]

  function previous() {
    setActive((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  function next() {
    setActive((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Testimonios"
          title="Una experiencia que se siente rapida y clara."
          description="Carrusel funcional con controles accesibles para revisar feedback clave."
        />
        <Card className="overflow-hidden">
          <CardContent className="p-6 sm:p-10">
            <Quote className="size-10 text-orange-500" />
            <blockquote className="mt-6 text-2xl font-semibold leading-tight text-balance sm:text-4xl">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={previous} aria-label="Testimonio anterior">
                  <ArrowLeft className="size-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={next} aria-label="Siguiente testimonio">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
