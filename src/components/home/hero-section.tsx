import { motion } from "framer-motion"
import { ArrowRight, Play, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { trustItems } from "@/data/home"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_20%,rgba(249,115,22,0.18),transparent_28%),radial-gradient(circle_at_18%_30%,rgba(14,165,233,0.16),transparent_25%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-800 dark:border-orange-500/30 dark:bg-orange-500/15 dark:text-orange-200">
            <Star className="size-3.5 fill-current" />
            Nueva experiencia premium
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-normal text-balance sm:text-7xl lg:text-8xl">
            Dragon Ball, redisenado para explorar sin friccion.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Una homepage veloz, accesible y moderna para descubrir sagas, guerreros, rankings y momentos clave con una experiencia visual de alto impacto.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              Explorar ahora
              <ArrowRight className="size-4" />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline">
                  <Play className="size-4" />
                  Ver resumen
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Capsule Arena</DialogTitle>
                  <DialogDescription>
                    Una interfaz construida para convertir curiosidad en accion: hero claro, datos escaneables, navegacion responsive y componentes accesibles.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 rounded-lg border border-border bg-background/70 px-3 py-2 text-sm shadow-sm">
                <item.icon className="size-4 text-orange-500" />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-[560px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <div className="absolute inset-4 rounded-full border border-border bg-background/70 shadow-2xl backdrop-blur" />
          <motion.div
            className="absolute inset-16 rounded-full bg-[radial-gradient(circle_at_32%_24%,#fff6a8_0_13%,#fb923c_14%_52%,#ea580c_53%_100%)] shadow-[0_34px_110px_rgba(234,88,12,0.42)]"
            animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <div className="absolute left-[30%] top-[30%] size-5 rounded-full bg-red-600 shadow-[52px_30px_0_#dc2626,102px_84px_0_#dc2626,18px_135px_0_#dc2626]" />
          <div className="absolute inset-x-6 bottom-7 rounded-lg border border-border bg-background/90 p-4 shadow-xl backdrop-blur">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              <span>Scouter live</span>
              <span className="text-emerald-500">Online</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {["Power", "Saga", "Speed"].map((label, index) => (
                <div key={label} className="rounded-lg bg-foreground p-3 text-background">
                  <p className="text-[0.65rem] uppercase tracking-[0.16em] opacity-70">{label}</p>
                  <p className="mt-1 text-lg font-black">{["96", "12", "0.4"][index]}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
