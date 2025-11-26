import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SkipLink } from "@/components/skip-link"
import { MobileNav } from "@/components/mobile-nav"

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-background">
            <SkipLink />

            {/* Header */}
            <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <Link href="/" className="flex items-center gap2">
                        <span className="text-2xl font-bold">
                            <span className="text-secondary">Cash</span>
                            <span className="text-primary">NetServices</span>
                        </span>
                    </Link>
                    <nav className="hidden items-center gap-6 md:flex">
                        <Link href="/" className="text-sm font-medium hover:text-primary">
                            Home
                        </Link>
                        <Link href="/what-we-offer" className="text-sm font-medium hover:text-primary">
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
                    <MobileNav />
                </div>
            </header>

            {/* Main Content */}
            <main id="main-content">
                {/* Hero Section */}
                <section aria-labelledby="page-heading" className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 text-white">
                    <div className="container mx-auto px-4">
                        <h1 id="page-heading" className="mb-4 text-4xl font-bold md:text-5xl">About CashNetService.com</h1>
                        <p className="text-lg md:text-xl">Trusted online lending since 2004</p>
                    </div>
                </section>

                {/* Company Story */}
                <section className="py-16">
                    <div className="container mx-auto max-w-4xl px-4">
                        <h2 className="mb-8 text-3xl font-bold">Our Story</h2>
                        <div className="space-y-6 text-lg text-muted-foreground">
                            <p>
                                For over 16 years, CashNetService.com has been helping hardworking Americans access the funds they need when
                                they need them most. We understand that life doesn't always go according to plan, and unexpected
                                expenses can create financial stress.
                            </p>
                            <p>
                                As part of Enova International, Inc. (NYSE:ENVA), a publicly traded company, we combine the innovation
                                of a technology company with the reliability and trust of an established financial services provider.
                                This unique position allows us to offer fast, secure, and convenient loan products to millions of
                                customers across the United States.
                            </p>
                            <p>
                                We've helped more than 4 million people rescue their finances, and we're committed to continuing this
                                mission by providing accessible credit solutions with transparent terms and exceptional customer
                                service.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="bg-slate-50 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-12 text-center text-3xl font-bold">Our Mission & Values</h2>

                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="rounded-2xl bg-white p-8 shadow-lg">
                                <h3 className="mb-4 text-2xl font-bold text-primary">Accessibility</h3>
                                <p className="text-muted-foreground">
                                    We believe everyone deserves access to credit, regardless of their credit score. Our alternative
                                    credit check considers your overall finances, not just a number.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-8 shadow-lg">
                                <h3 className="mb-4 text-2xl font-bold text-primary">Transparency</h3>
                                <p className="text-muted-foreground">
                                    No hidden fees, no surprises. We clearly communicate all terms, rates, and conditions upfront so you
                                    can make informed decisions about your finances.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-8 shadow-lg">
                                <h3 className="mb-4 text-2xl font-bold text-primary">Innovation</h3>
                                <p className="text-muted-foreground">
                                    We continuously invest in technology to make borrowing easier, faster, and more secure. From instant
                                    decisions to same-day funding, we're always improving.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* By The Numbers */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-12 text-center text-3xl font-bold">CashNetService.com By The Numbers</h2>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="text-center">
                                <div className="mb-2 text-5xl font-bold text-primary">16+</div>
                                <div className="text-lg text-muted-foreground">Years of Service</div>
                            </div>

                            <div className="text-center">
                                <div className="mb-2 text-5xl font-bold text-primary">4M+</div>
                                <div className="text-lg text-muted-foreground">Customers Served</div>
                            </div>

                            <div className="text-center">
                                <div className="mb-2 text-5xl font-bold text-primary">4.6</div>
                                <div className="text-lg text-muted-foreground">TrustScore Rating</div>
                            </div>

                            <div className="text-center">
                                <div className="mb-2 text-5xl font-bold text-primary">24/7</div>
                                <div className="text-lg text-muted-foreground">Online Access</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Join Millions of Satisfied Customers</h2>
                        <p className="mb-8 text-lg">Experience the CashNetService.com difference today</p>
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
