"use client"

import * as React from "react"
import { ChevronRight, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left hover:opacity-80 transition-opacity"
      >
        <span className="font-semibold text-foreground pr-8">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" />
        ) : (
          <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 pr-8">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

interface AccordionProps {
  children: React.ReactNode
  className?: string
}

export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={cn("w-full", className)}>
      {children}
    </div>
  )
}
