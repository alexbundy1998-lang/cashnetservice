import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SkipLink } from "@/components/skip-link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MobileNav } from "@/components/mobile-nav"

export default function FAQsPage() {
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
                        <Link href="/what-we-offer" className="text-sm font-medium hover:text-primary">
                            What We Offer
                        </Link>
                        <Link href="/rates-and-terms" className="text-sm font-medium hover:text-primary">
                            Rates & Terms
                        </Link>
                        <Link href="/faqs" className="text-sm font-medium text-primary">
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
                        <h1 id="page-heading" className="mb-4 text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
                        <p className="text-lg md:text-xl">Find answers to common questions about our loans and services</p>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-16">
                    <div className="container mx-auto max-w-4xl px-4">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <AccordionItem value="item-1" className="rounded-lg border bg-white px-6 shadow-sm">
                                <AccordionTrigger className="text-left text-lg font-semibold">
                                    How quickly can I get my loan?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    If approved before 1:30 p.m. CT Monday-Friday, funds are generally deposited same business day, subject to your bank's processing times. Applications approved at other times are typically funded the next business day.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="rounded-lg border bg-white px-6 shadow-sm">
                                <AccordionTrigger className="text-left text-lg font-semibold">
                                    What are the requirements to apply?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    To qualify, you must be at least 18 years old, have a valid checking account, provide a valid email address and phone number, have a steady source of income, and be a U.S. citizen or permanent resident.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="rounded-lg border bg-white px-6 shadow-sm">
                                <AccordionTrigger className="text-left text-lg font-semibold">
                                    Will applying affect my credit score?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    We may perform a credit check as part of our underwriting process, but we also consider other factors beyond your credit score. Our alternative credit check makes it possible for those with less-than-perfect credit to be approved.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="rounded-lg border bg-white px-6 shadow-sm">
                                <AccordionTrigger className="text-left text-lg font-semibold">
                                    How do I repay my loan?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Repayment is easy and automatic. On your due date, we'll withdraw the payment from your checking account. You can also make early payments or pay off your loan early at any time without penalty.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="rounded-lg border bg-white px-6 shadow-sm">
                                <AccordionTrigger className="text-left text-lg font-semibold">
                                    Can I extend my loan if I need more time?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    In certain states, you may be able to extend your loan for an additional fee. Contact our customer service team at least 1 business day before your due date to discuss your options.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-6" className="rounded-lg border bg-white px-6 shadow-sm">
                                <AccordionTrigger className="text-left text-lg font-semibold">
                                    Is my personal information secure?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Yes. We use bank-level 256-bit encryption to protect your data. We continuously monitor and protect our network with TrustedSite® security. Your information is never sold to third parties.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-7" className="rounded-lg border bg-white px-6 shadow-sm">
                                <AccordionTrigger className="text-left text-lg font-semibold">
                                    What if I have trouble making a payment?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    We understand that unexpected situations can arise. If you're having difficulty, please contact our customer service team as soon as possible. We'll work with you to find a solution.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-8" className="rounded-lg border bg-white px-6 shadow-sm">
                                <AccordionTrigger className="text-left text-lg font-semibold">
                                    Can I have multiple loans at once?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    This depends on your state's regulations and your current loan status. In some cases, you may be eligible for additional funds after making on-time payments on your current loan.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="bg-slate-50 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="mb-4 text-3xl font-bold">Still Have Questions?</h2>
                        <p className="mb-8 text-lg text-muted-foreground">
                            Our customer service team is here to help
                        </p>
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                                <Link href="/contact-us">Contact Us</Link>
                            </Button>
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
                                <Link href="/bank-authentication">Apply Now</Link>
                            </Button>
                        </div>
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
