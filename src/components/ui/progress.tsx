import * as React from "react"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value = 0,
  ...props
}: React.ComponentProps<"div"> & {
  value?: number
}) {
  const safeValue = Math.max(0, Math.min(100, value))

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={safeValue}
      className={cn("h-2 w-full overflow-hidden rounded-lg bg-secondary", className)}
      {...props}
    >
      <div className="h-full rounded-lg bg-primary transition-all" style={{ width: `${safeValue}%` }} />
    </div>
  )
}

export { Progress }
