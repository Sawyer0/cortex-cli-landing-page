import Link from "next/link"
import { ElementTile } from "@/components/brand/element-tile"
import { MobileMenu } from "@/components/layout/mobile-menu"
import { SiteLink } from "@/components/ui/site-link"
import { primaryNav, sectionHref } from "@/content/site"

export function SiteHeader({ onHomePage }: { onHomePage: boolean }) {
  const links = primaryNav.map((link) => ({ label: link.label, href: sectionHref(link.sectionId, onHomePage) }))
  const contact = links.at(-1)
  const sectionLinks = links.slice(0, -1)

  return (
    <header className="sticky top-0 z-40 border-b border-graphite-700 bg-graphite-900">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Listrum home" className="flex min-h-11 items-center gap-3">
          <ElementTile size="sm" />
          <span className="font-mono text-base tracking-[0.22em] text-steel-50">LISTRUM</span>
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {sectionLinks.map((link) => (
              <li key={link.href}>
                <SiteLink
                  href={link.href}
                  className="inline-flex min-h-11 items-center px-3 text-sm text-steel-200 transition-colors hover:text-safety-400"
                >
                  {link.label}
                </SiteLink>
              </li>
            ))}
            {contact && (
              <li className="ml-2">
                <SiteLink
                  href={contact.href}
                  className="inline-flex min-h-11 items-center rounded-tile border border-graphite-600 px-4 font-mono text-xs uppercase tracking-[0.14em] text-steel-50 transition-colors hover:border-safety-400 hover:text-safety-400"
                >
                  {contact.label}
                </SiteLink>
              </li>
            )}
          </ul>
        </nav>
        <MobileMenu links={links} />
      </div>
    </header>
  )
}
