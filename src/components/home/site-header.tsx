import { Menu } from "lucide-react"

import { ThemeToggle } from "@/components/home/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { navItems } from "@/data/home"

type SiteHeaderProps = {
  isDark: boolean
  onThemeChange: (checked: boolean) => void
}

export function SiteHeader({ isDark, onThemeChange }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Capsule Arena inicio">
          <span className="grid size-10 place-items-center rounded-lg bg-orange-500 text-sm font-black text-white shadow-lg shadow-orange-500/20">
            DB
          </span>
          <span className="text-sm font-black uppercase tracking-[0.22em]">Capsule Arena</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle isDark={isDark} onChange={onThemeChange} />
          <Button className="bg-orange-500 text-white hover:bg-orange-600">Comenzar</Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle isDark={isDark} onChange={onThemeChange} />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Abrir menu">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Capsule Arena</SheetTitle>
                <SheetDescription>Navega por la experiencia Dragon Ball.</SheetDescription>
              </SheetHeader>
              <nav className="grid gap-3" aria-label="Menu movil">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-muted" href={item.href}>
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <Button className="mt-6 w-full bg-orange-500 text-white hover:bg-orange-600">Comenzar</Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
