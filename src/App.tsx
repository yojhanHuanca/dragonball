import { useEffect, useState } from "react"

import { BenefitsSection } from "@/components/home/benefits-section"
import { FaqSection } from "@/components/home/faq-section"
import { FeaturesSection } from "@/components/home/features-section"
import { FinalCta } from "@/components/home/final-cta"
import { HeroSection } from "@/components/home/hero-section"
import { SagasSection } from "@/components/home/sagas-section"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteHeader } from "@/components/home/site-header"
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"

function getInitialTheme() {
  if (typeof window === "undefined") {
    return false
  }

  const savedTheme = window.localStorage.getItem("capsule-theme")
  if (savedTheme) {
    return savedTheme === "dark"
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

function App() {
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    window.localStorage.setItem("capsule-theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader isDark={isDark} onThemeChange={setIsDark} />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <SagasSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
