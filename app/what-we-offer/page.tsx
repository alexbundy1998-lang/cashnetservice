import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, DollarSign, Clock, Shield } from "lucide-react"
import { SkipLink } from "@/components/skip-link"

export default function WhatWeOfferPage() {
    return (
        <div className="min-h-screen bg-background">
            <SkipLink />

            {/* Header */}
            <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold">
                            <span className="text-secondary">Cash</span>
                            <span className="text-primary">NetServices</span>
                        </span>
                    </Link>
                    <nav className="hidden items-center gap-6 md:flex">
                        <Link href="/" className="text-sm font-medium hover:text-primary">
                            Home
                        </Link>
                        <Link href="/what-we-offer" className="text-sm font-medium text-primary">
                            What We Offer
                        </Link>
                        <Link href="/rates-and-terms" className="text-sm font-medium hover:text-primary">
                            Rates & Terms
                        </Link>
                        <Link href="/faqs" className="text-sm font-medium hover:text-primary">
                            FAQs
                        </Link>
                        <Link href="/contact-us" className="text-sm font-medium hover:text-primary">
                            Contact Us
                        </Link>
                        <Button size="sm" className="bg-secondary hover:bg-secondary/90" asChild>
                            <Link href="/bank-authentication">Apply Now</Link>
                        </Button>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main id="main-content">
                {/* Hero Section */}
                <section aria-labelledby="page-heading" className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 text-white">
                    <div className="container mx-auto px-4">
                        <h1 id="page-heading" className="mb-4 text-4xl font-bold md:text-5xl">What We Offer</h1>
                        <p className="text-lg md:text-xl">Fast, flexible loan options designed to meet your financial needs</p>
                    </div>
                </section>

                {/* Loan Products */}
                <section aria-labelledby="products-heading" className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 id="products-heading" className="mb-12 text-center text-3xl font-bold">Our Loan Products</h2>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {/* Payday Loans */}
                            <div className="rounded-2xl border bg-white p-8 shadow-lg">
                                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-4">
                                    <DollarSign className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold">Payday Loans</h3>
                                <p className="mb-4 text-muted-foreground">
                                    Short-term loans to help you through to your next payday. Quick approval and same-day funding available.
                                </p>
                                <ul className="mb-6 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                        <span>$100 - $1,500</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                        <span>2-4 week terms</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                        <span>Instant decision</span>
                                    </li>
                                </ul>
                                <Button className="w-full bg-secondary hover:bg-secondary/90" asChild>
                                    <Link href="/bank-authentication">Apply Now</Link>
                                </Button>
                            </div>

                            {/* Installment Loans */}
                            <div className="rounded-2xl border bg-white p-8 shadow-lg">
                                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-4">
                                    <Clock className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold">Installment Loans</h3>
                                <p className="mb-4 text-muted-foreground">
                                    Larger loans with flexible payment schedules. Pay back over multiple months with fixed installments.
                                </p>
                                <ul className="mb-6 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                        <span>$500 - $3,000</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                        <span>3-12 month terms</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                        <span>Fixed monthly payments</span>
                                    </li>
                                </ul>
                                <Button className="w-full bg-secondary hover:bg-secondary/90" asChild>
                                    <Link href="/bank-authentication">Apply Now</Link>
                                </Button>
                            </div>

                            {/* Line of Credit */}
                            <div className="rounded-2xl border bg-white p-8 shadow-lg">
                                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-4">
                                    <Shield className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold">Line of Credit</h3>
                                <p className="mb-4 text-muted-foreground">
                                    Access funds when you need them. Borrow only what you need and pay interest only on what you use.
                                </p>
                                <ul className="mb-6 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                        <span>Up to $4,500</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                        <span>Revolving credit</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                        <span>Reusable funds</span>
                                    </li>
                                </ul>
                                <Button className="w-full bg-secondary hover:bg-secondary/90" asChild>
                                    <Link href="/bank-authentication">Apply Now</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section aria-labelledby="features-heading" className="bg-slate-50 py-16">
                    <div className="container mx-auto px-4">
                        <h2 id="features-heading" className="mb-12 text-center text-3xl font-bold">Why Choose CashNetService.com?</h2>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <div className="text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="rounded-full bg-primary/10 p-4">
                                        <CheckCircle2 className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">Instant Decision</h3>
                                <p className="text-sm text-muted-foreground">Get an answer in minutes</p>
                            </div>

                            <div className="text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="rounded-full bg-primary/10 p-4">
                                        <CheckCircle2 className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">Same-Day Funding</h3>
                                <p className="text-sm text-muted-foreground">Money in your account today</p>
                            </div>

                            <div className="text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="rounded-full bg-primary/10 p-4">
                                        <CheckCircle2 className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">No Hidden Fees</h3>
                                <p className="text-sm text-muted-foreground">Transparent pricing</p>
                            </div>

                            <div className="text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="rounded-full bg-primary/10 p-4">
                                        <CheckCircle2 className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">Secure Platform</h3>
                                <p className="text-sm text-muted-foreground">Bank-level encryption</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
                        <p className="mb-8 text-lg">Apply now and get an instant decision</p>
                        <Button size="lg" className="bg-secondary px-12 py-6 text-lg font-semibold hover:bg-secondary/90" asChild>
                            <Link href="/bank-authentication">Apply Now</Link>
                        </Button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer role="contentinfo" className="border-t bg-slate-800 py-8 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-4">
                        <span className="text-2xl font-bold">
                            <span className="text-orange-400">Cash</span>
                            <span className="text-teal-400">NetServices</span>
                        </span>
                    </div>
                    <div className="mb-4 flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <span>|</span>
                        <Link href="/what-we-offer" className="hover:text-primary">What We Offer</Link>
                        <span>|</span>
                        <Link href="/rates-and-terms" className="hover:text-primary">Rates & Terms</Link>
                        <span>|</span>
                        <Link href="/contact-us" className="hover:text-primary">Contact Us</Link>
                        <span>|</span>
                        <Link href="/faqs" className="hover:text-primary">FAQs</Link>
                    </div>
                    <p className="text-xs text-slate-400">© {new Date().getFullYear()} CashNetService.com. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
