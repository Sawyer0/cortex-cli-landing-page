import { workflow } from "@/content/home/detection"

export function WorkflowTimeline() {
  return (
    <div className="mt-20 md:mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">{workflow.eyebrow}</p>
        <h2 id="workflow-title" className="mt-3 text-3xl font-bold leading-tight tracking-tight text-steel-50 sm:text-4xl">
          {workflow.headline.lead} <span className="text-safety-400">{workflow.headline.emphasis}</span>
        </h2>
        <p className="mt-3 text-base text-steel-400">{workflow.summary}</p>
      </div>
      <ol aria-labelledby="workflow-title" className="mt-12 grid gap-4 md:grid-cols-3">
        {workflow.steps.map((step) => (
          <li key={step.step} className="rounded-tile border border-graphite-700 bg-graphite-800 p-6">
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-tile border border-safety-500/60 font-mono text-sm text-safety-400">
                {step.step}
              </span>
              <span className="font-mono text-2xl text-steel-50">{step.time}</span>
            </div>
            <h3 className="mt-5 font-mono text-sm uppercase tracking-[0.16em] text-safety-400">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-200">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
