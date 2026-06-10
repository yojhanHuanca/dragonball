import { useState } from "react"
import { Mail } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FinalCta() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-lg border border-border bg-foreground p-6 text-background shadow-2xl sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-300">Acceso anticipado</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-balance sm:text-5xl">
              Convierte esta landing en una app completa.
            </h2>
            <p className="mt-4 max-w-2xl text-background/70">
              Deja un correo y activa el flujo de interes con validacion, feedback visual y una experiencia responsive.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-lg bg-background p-4 text-foreground shadow-xl">
            <label htmlFor="email" className="text-sm font-semibold">
              Correo
            </label>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="tu@email.com"
                autoComplete="email"
              />
              <Button type="submit" className="bg-orange-500 text-white hover:bg-orange-600">
                <Mail className="size-4" />
                Unirme
              </Button>
            </div>
            {submitted ? (
              <Alert className="mt-4 border-emerald-200 bg-emerald-50 text-emerald-950">
                <AlertTitle>Listo</AlertTitle>
                <AlertDescription>Tu correo quedo registrado para el demo.</AlertDescription>
              </Alert>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
