"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { NetflowBackground } from "@/components/ui/netflow-background"
import { Footer } from "@/components/footer"

export default function AboutPage() {
    return (
        <main className="min-h-screen relative">
            <NetflowBackground className="fixed inset-0 opacity-60 pointer-events-none z-0" />

            {/* Header */}
            <header className="sticky top-0 z-50 bg-secondary/80 backdrop-blur supports-[backdrop-filter]:bg-secondary/60 border-b border-white/5">
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 h-14 sm:h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        {/* Periodic Table Element Logo */}
                        <div className="relative w-10 h-12 bg-secondary-foreground/10 border border-secondary-foreground/20 flex flex-col items-center justify-center">
                            <span className="absolute top-0.5 left-1 text-[7px] font-medium text-carbon leading-none">443</span>
                            <span className="text-xl font-bold text-primary leading-none mt-1">Ls</span>
                            <span className="text-[6px] font-medium text-carbon leading-none mt-0.5">Listrum</span>
                        </div>
                        <span className="font-mono text-base sm:text-lg font-semibold tracking-tight text-secondary-foreground hidden sm:inline">
                            LISTRUM
                        </span>
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Content */}
            <article className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
                <div className="max-w-3xl mx-auto">

                    {/* Hero */}
                    <div className="mb-16">
                        <span className="text-micro font-mono text-secondary-foreground/60">Manifesto</span>
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-secondary-foreground leading-[1.1] mt-2">
                            Why Listrum
                        </h1>
                    </div>

                    {/* The Origin Story */}
                    {/* The Method & The Symbol Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
                        {/* The Method */}
                        <section className="space-y-4 text-body text-secondary-foreground/80 leading-relaxed">
                            <p>
                                Listrum is the chemical barrier. It acts as the carbolic acid of the modern network.
                            </p>
                            <p>
                                We deploy at the edge where contamination enters. We monitor without accessing. We detect without guessing. We report immediately.
                            </p>
                            <p className="font-medium text-secondary-foreground">
                                Deterministic. Verifiable. Immutable.
                            </p>
                        </section>

                        {/* The Symbol */}
                        <section>
                            <div className="flex items-start gap-6">
                                {/* Periodic Table Element Card */}
                                <div className="relative flex-shrink-0 w-24 h-28 bg-secondary-foreground/5 border border-secondary-foreground/20 flex flex-col items-center justify-center">
                                    <span className="absolute top-1.5 left-2 text-[10px] font-medium text-carbon">443</span>
                                    <span className="text-4xl font-bold text-primary leading-none">Ls</span>
                                    <span className="text-xs font-medium text-carbon mt-1">Listrum</span>
                                </div>
                                <div className="space-y-3 text-body text-secondary-foreground/80 leading-relaxed">
                                    <p>
                                        <strong className="text-secondary-foreground">Ls</strong> represents a new element on the periodic table.
                                    </p>
                                    <p>
                                        <strong className="text-secondary-foreground">ls</strong> is the most fundamental command in your terminal.
                                    </p>
                                    <p>
                                        <strong className="text-secondary-foreground">443</strong> represents the gateway to secure traffic.
                                    </p>
                                </div>
                            </div>
                            <p className="text-body text-secondary-foreground/80 leading-relaxed mt-6">
                                We are the foundational element of network sterility.
                            </p>
                        </section>
                    </div>

                    {/* The Origin Story */}
                    <section className="mb-16">
                        <h2 className="text-h2 text-secondary-foreground mb-6">The Lister Legacy</h2>
                        <div className="space-y-4 text-body text-secondary-foreground/80 leading-relaxed">
                            <p>
                                In 1865, surgery was often fatal. At Glasgow Royal Infirmary, nearly half of all patients died after their operations. Doctors blamed "bad air" or the patient's own weakness.
                            </p>
                            <p>
                                Joseph Lister had a different idea. He read Louis Pasteur’s work on germs and realized that invisible organisms were entering wounds. The problem wasn't bad luck. It was contamination.
                            </p>
                            <p>
                                Lister created a new system. He sterilized instruments with carbolic acid and created a <strong className="text-secondary-foreground">"sterile field,"</strong> a zone where germs could not survive.
                            </p>
                            <p>
                                The results were undeniable. Ward mortality rates fell to 15% within four years.
                            </p>
                            <p className="border-l-2 border-primary/30 pl-4 italic">
                                The medical community was skeptical. They couldn't see the germs, so they didn't believe they existed. But Lister’s methods worked, and antiseptic surgery eventually became the global standard.
                            </p>
                            <p>
                                We see the same pattern in cybersecurity today. Networks are infected by ransomware, which acts like digital sepsis. Most of the industry reacts after the infection happens, instead of preventing it from entering in the first place.
                            </p>
                        </div>
                    </section>

                    {/* The Philosophy */}
                    <section className="mb-16">
                        <h2 className="text-h2 text-secondary-foreground mb-6">The Philosophy</h2>
                        <div className="space-y-4 text-body text-secondary-foreground/80 leading-relaxed">
                            <p className="font-medium text-secondary-foreground">
                                The Digital Application of Antisepsis
                            </p>
                            <p>
                                Listrum is built on one idea: applying Lister’s antiseptic methods to computer networks. We don't see cybersecurity as a war against hackers. We see it as keeping a digital environment sterile.
                            </p>
                            <p>
                                Our approach digitizes Lister’s three core principles:
                            </p>
                            <ul className="space-y-4 pl-4 border-l-2 border-primary/30 my-6">
                                <li>
                                    <strong className="text-secondary-foreground">The Chemical Barrier (Formal Verification):</strong> Carbolic acid guaranteed that germs were killed. Formal verification guarantees that code is safe. We replace guessing with mathematical proof.
                                </li>
                                <li>
                                    <strong className="text-secondary-foreground">Treatment at the Wound (Edge Deployment):</strong> Lister proved that preventing infection at the entry point is far better than treating it after it spreads. We deploy at the network edge to stop contamination before it gets in.
                                </li>
                                <li>
                                    <strong className="text-secondary-foreground">Absolute Exclusion (Deterministic Isolation):</strong> A surgical field is either sterile or it is not. There is no middle ground. We reject "acceptable risk" in favor of total isolation.
                                </li>
                            </ul>
                            <p>
                                By digitizing these principles, we shift from reacting to attacks to preventing infection.
                            </p>

                            <div className="mt-8 p-4 bg-secondary-foreground/5 border border-secondary-foreground/10">
                                <p className="text-sm font-medium text-secondary-foreground mb-2">Why We Reject Probabilistic AI</p>
                                <p className="text-body-sm text-secondary-foreground/70">
                                    Generative AI is probabilistic. It relies on statistical likelihood rather than verification. In surgery, "likely sterile" allows for infection. We reject these models. Listrum uses formal verification to ensure that every interaction is mathematically proven to be safe.
                                </p>
                            </div>
                        </div>
                    </section>



                    {/* The Motto */}
                    <section className="mb-16 py-8 border-y border-secondary-foreground/10">
                        <p className="text-2xl sm:text-3xl font-semibold text-secondary-foreground text-center">
                            We do not guess.<br />
                            <span className="text-primary">We verify.</span>
                        </p>
                    </section>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-12 px-8 text-sm font-bold tracking-wider uppercase bg-primary hover:bg-primary/90 text-white border-none shadow-xl shadow-primary/20">
                            Deploy Ls-443
                            <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline" asChild className="h-12 px-8 text-sm font-bold tracking-wider uppercase border-white/20 bg-white/5 hover:bg-white/10 text-white">
                            <Link href="/">
                                Return to Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    )
}
