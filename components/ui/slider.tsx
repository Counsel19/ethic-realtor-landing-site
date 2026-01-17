"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface RangeSliderProps {
  min?: number
  max?: number
  value?: [number, number]
  onValueChange?: (value: [number, number]) => void
  formatValue?: (value: number) => string
  className?: string
}

const RangeSlider = React.forwardRef<HTMLDivElement, RangeSliderProps>(
  (
    {
      className,
      min = 0,
      max = 10000000,
      value,
      onValueChange,
      formatValue = (val) => val.toLocaleString(),
    },
    ref
  ) => {
    const [localValue, setLocalValue] = React.useState<[number, number]>(
      value || [min, max]
    )

    React.useEffect(() => {
      if (value) {
        setLocalValue(value)
      }
    }, [value])

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMin = Number(e.target.value)
      const newValue: [number, number] = [
        Math.min(newMin, localValue[1]),
        localValue[1],
      ]
      setLocalValue(newValue)
      onValueChange?.(newValue)
    }

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMax = Number(e.target.value)
      const newValue: [number, number] = [
        localValue[0],
        Math.max(newMax, localValue[0]),
      ]
      setLocalValue(newValue)
      onValueChange?.(newValue)
    }

    const minPercent = ((localValue[0] - min) / (max - min)) * 100
    const maxPercent = ((localValue[1] - min) / (max - min)) * 100

    return (
      <div ref={ref} className={cn("w-full space-y-3", className)}>
        <div className="relative h-2">
          <div className="absolute h-2 w-full rounded-full bg-muted" />
          <div
            className="absolute h-2 rounded-full bg-primary"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />
          <input
            type="range"
            min={min}
            max={max}
            value={localValue[0]}
            onChange={handleMinChange}
            className="absolute top-0 h-2 w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-md"
          />
          <input
            type="range"
            min={min}
            max={max}
            value={localValue[1]}
            onChange={handleMaxChange}
            className="absolute top-0 h-2 w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-md"
          />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{formatValue(localValue[0])}</span>
          <span>{formatValue(localValue[1])}</span>
        </div>
      </div>
    )
  }
)
RangeSlider.displayName = "RangeSlider"

export { RangeSlider }
