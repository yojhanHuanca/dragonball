import { Separator } from "@/components/ui/separator"
import { navItems } from "@/data/home"

export function SiteFooter() {
  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Separator />
        <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-black uppercase tracking-[0.22em]">Capsule Arena</p>
            <p className="mt-2 text-sm text-muted-foreground">Landing premium construida con React, Tailwind y shadcn/UI.</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground" aria-label="Footer">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
