"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = id || React.useId()

    return (
      <div className="flex items-center gap-2">
        <div className="relative inline-flex items-center">
          <input
            type="checkbox"
            id={checkboxId}
            ref={ref}
            className={cn(
              "peer h-4 w-4 shrink-0 rounded border border-input bg-background transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "checked:bg-primary checked:border-primary",
              "appearance-none cursor-pointer",
              className
            )}
            {...props}
          />
          <Check
            className={cn(
              "absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-primary-foreground opacity-0 transition-opacity pointer-events-none",
              "peer-checked:opacity-100"
            )}
          />
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
