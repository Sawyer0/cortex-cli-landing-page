import { ElementTile } from "@/components/brand/element-tile"
import { SiteLink } from "@/components/ui/site-link"
import { regulatoryReferences, sectionHref, site } from "@/content/site"

export function SiteFooter({ onHomePage }: { onHomePage: boolean }) {
  return (
    <footer className="relative z-10 border-t border-graphite-700 bg-graphite-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <ElementTile size="sm" />
            <div>
              <p className="font-mono font-medium tracking-[0.22em] text-steel-50">LISTRUM</p>
              <p className="text-sm text-steel-400">{site.tagline}</p>
            </div>
          </div>
          <nav aria-label="Footer">
            <ul className="flex gap-2">
              <li>
                <SiteLink
                  href={sectionHref("contact", onHomePage)}
                  className="inline-flex min-h-11 items-center text-sm text-steel-200 transition-colors hover:text-safety-400"
                >
                  Contact
                </SiteLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-graphite-700 pt-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-steel-400">Regulatory References</h2>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-steel-200">
            {regulatoryReferences.map((reference) => (
              <li key={reference}>{reference}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8 space-y-1 text-xs text-steel-400">
          <p>{site.copyright}</p>
          <p>
            {site.motto.lead} {site.motto.close}
          </p>
        </div>
      </div>
    </footer>
  )
}
