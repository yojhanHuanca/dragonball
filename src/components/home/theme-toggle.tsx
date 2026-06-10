import { Moon, Sun } from "lucide-react"

import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type ThemeToggleProps = {
  isDark: boolean
  onChange: (checked: boolean) => void
}

export function ThemeToggle({ isDark, onChange }: ThemeToggleProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-background/70 px-2 py-1 shadow-sm">
            <Sun className="size-4 text-orange-500" aria-hidden="true" />
            <Switch checked={isDark} onCheckedChange={onChange} aria-label="Cambiar tema" />
            <Moon className="size-4 text-sky-500" aria-hidden="true" />
          </div>
        </TooltipTrigger>
        <TooltipContent>{isDark ? "Modo oscuro" : "Modo claro"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
