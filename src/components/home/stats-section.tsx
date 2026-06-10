import { motion } from "framer-motion"

import { stats } from "@/data/home"

export function StatsSection() {
  return (
    <section className="border-y border-border bg-foreground px-4 py-14 text-background sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="rounded-lg border border-background/10 bg-background/[0.06] p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <p className="text-4xl font-black">{stat.value}</p>
            <p className="mt-3 font-semibold">{stat.label}</p>
            <p className="mt-1 text-sm text-background/60">{stat.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
