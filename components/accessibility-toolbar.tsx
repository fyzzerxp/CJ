"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }, [highContrast])

  useEffect(() => {
    if (largeText) {
      document.documentElement.classList.add("large-text")
    } else {
      document.documentElement.classList.remove("large-text")
    }
  }, [largeText])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        {isOpen && (
          <div 
            className="absolute bottom-14 right-0 bg-card border border-border rounded-lg shadow-lg p-4 min-w-[200px]"
            role="region"
            aria-label="Accessibility options"
          >
            <h3 className="font-semibold text-foreground mb-3 text-sm">Accessibility Options</h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setHighContrast(!highContrast)}
                className="flex items-center justify-between gap-3 text-sm text-foreground hover:bg-secondary p-2 rounded-md transition-colors"
                aria-pressed={highContrast}
              >
                <span>High Contrast</span>
                <span 
                  className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                    highContrast ? "bg-primary justify-end" : "bg-muted justify-start"
                  }`}
                  aria-hidden="true"
                >
                  <span className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </span>
              </button>
              <button
                onClick={() => setLargeText(!largeText)}
                className="flex items-center justify-between gap-3 text-sm text-foreground hover:bg-secondary p-2 rounded-md transition-colors"
                aria-pressed={largeText}
              >
                <span>Large Text</span>
                <span 
                  className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                    largeText ? "bg-primary justify-end" : "bg-muted justify-start"
                  }`}
                  aria-hidden="true"
                >
                  <span className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </span>
              </button>
            </div>
          </div>
        )}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="default"
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg"
          aria-label="Open accessibility options"
          aria-expanded={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <circle cx="12" cy="4" r="2" />
            <path d="M12 6v6" />
            <path d="M8 10l-3 6" />
            <path d="M16 10l3 6" />
            <path d="M8 22l4-6 4 6" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
