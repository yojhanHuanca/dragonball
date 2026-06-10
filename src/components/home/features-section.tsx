import { motion } from "framer-motion"

import { SectionHeading } from "@/components/home/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { features } from "@/data/home"

export function FeaturesSection() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experiencia"
          title="Diseno pensado para descubrir rapido."
          description="Cada modulo prioriza escaneo visual, accion clara y contenido ordenado para que el usuario avance sin perder contexto."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <div className="mb-6 grid size-12 place-items-center rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-200">
                    <feature.icon className="size-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-2 rounded-lg bg-gradient-to-r from-orange-500 via-amber-300 to-cyan-400" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
