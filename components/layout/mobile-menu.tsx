"use client"

import { useEffect, useId, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { SiteLink } from "@/components/ui/site-link"

export interface MenuLink {
  label: string
  href: string
}

export function MobileMenu({ links }: { links: readonly MenuLink[] }) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      setOpen(false)
      buttonRef.current?.focus()
    }
    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [open])

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-tile border border-graphite-600 text-steel-50 hover:border-safety-400"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
      </button>
      <nav
        id={panelId}
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-graphite-700 bg-graphite-900 px-4 pb-4"
      >
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <SiteLink
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-graphite-800 font-mono text-sm uppercase tracking-[0.14em] text-steel-200 hover:text-safety-400"
              >
                {link.label}
              </SiteLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
