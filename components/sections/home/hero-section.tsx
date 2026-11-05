import { ChevronRight, FileText } from "lucide-react"
import { ActionLink } from "@/components/ui/action-link"
import { DeviceInventory } from "@/components/widgets/device-inventory/device-inventory"
import { hero } from "@/content/home/hero"
import { whitepaperHref } from "@/content/site"

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="lab-grid absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:py-24">
        <div>
          <p className="inline-flex rounded-tile border border-graphite-600 bg-graphite-900 px-3 py-1 font-mono text-xs tracking-[0.16em] text-steel-200">
            {hero.badge}
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.5rem] font-bold leading-[1.08] tracking-tight text-steel-50 sm:text-5xl lg:text-[3.5rem]"
          >
            {hero.headline.lead}
            <br />
            <span className="text-safety-400">{hero.headline.emphasis}</span>
            <br />
            {hero.headline.close}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-steel-200 sm:text-lg">{hero.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ActionLink href="#contact" className="sm:px-5">
              {hero.primaryCta}
              <ChevronRight aria-hidden="true" className="h-4 w-4" />
            </ActionLink>
            <ActionLink href={whitepaperHref} variant="secondary" className="sm:px-5">
              <FileText aria-hidden="true" className="h-4 w-4" />
              {hero.secondaryCta}
            </ActionLink>
          </div>
        </div>
        <DeviceInventory />
      </div>
    </section>
  )
}
