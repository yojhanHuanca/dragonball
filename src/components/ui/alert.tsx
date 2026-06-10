import * as React from "react"

import { cn } from "@/lib/utils"

function Alert({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="alert"
      className={cn("relative w-full rounded-lg border border-border bg-background p-4 text-sm", className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"h4">) {
  return <h4 className={cn("mb-1 font-semibold leading-none tracking-normal", className)} {...props} />
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("text-muted-foreground", className)} {...props} />
}

export { Alert, AlertDescription, AlertTitle }
