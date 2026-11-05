import { philosophy } from "@/content/about/philosophy"
import { site } from "@/content/site"

export function CommitmentStrip() {
  return (
    <section aria-labelledby="commitment-title" className="relative border-t border-graphite-700">
      <div aria-hidden="true" className="lab-grid absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 id="commitment-title" className="eyebrow">
          {philosophy.commitmentEyebrow}
        </h2>
        <p className="mt-6 text-3xl font-bold leading-tight tracking-tight text-steel-50 sm:text-4xl md:text-5xl">
          {site.motto.lead}
          <br />
          <span className="text-safety-400">{site.motto.close}</span>
        </p>
      </div>
    </section>
  )
}
