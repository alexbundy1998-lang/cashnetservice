import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent } from "@/components/ui/card"

export default function RatesAndTermsPage() {
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
                        <Link href="/rates-and-terms" className="text-sm font-medium text-primary">
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
                        <h1 id="page-heading" className="mb-4 text-4xl font-bold md:text-5xl">Rates & Terms</h1>
                        <p className="text-lg md:text-xl">Transparent pricing with no hidden fees</p>
                    </div>
                </section>

                {/* Important Notice */}
                <section className="bg-amber-50 py-8">
                    <div className="container mx-auto max-w-4xl px-4">
                        <div className="rounded-lg bg-white p-6 shadow-md">
                            <h2 className="mb-4 text-2xl font-bold">Important Information</h2>
                            <p className="text-sm text-muted-foreground">
                                Rates and terms vary by state and are subject to change. The information provided is for illustrative
                                purposes. Your actual rate and terms will be presented during the application process and are based on
                                your creditworthiness, state regulations, and other factors.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Loan Types */}
                <section className="py-16">
                    <div className="container mx-auto max-w-4xl px-4">
                        <h2 className="mb-12 text-center text-3xl font-bold">Example Rates by Loan Type</h2>

                        <div className="space-y-8">
                            {/* Payday Loans */}
                            <Card>
                                <CardContent className="p-8">
                                    <h3 className="mb-4 text-2xl font-bold text-primary">Payday Loans</h3>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <h4 className="mb-2 font-semibold">Loan Amount</h4>
                                            <p className="text-muted-foreground">$100 - $1,500</p>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold">Loan Term</h4>
                                            <p className="text-muted-foreground">14-31 days (varies by state)</p>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold">APR Range</h4>
                                            <p className="text-muted-foreground">260% - 780%*</p>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold">Finance Charge</h4>
                                            <p className="text-muted-foreground">$15 - $30 per $100 borrowed</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 rounded-lg bg-slate-50 p-4">
                                        <p className="text-sm text-muted-foreground">
                                            <strong>Example:</strong> For a $500 payday loan with a 14-day term at $15 per $100 borrowed,
                                            the finance charge would be $75, and the total amount due would be $575.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Installment Loans */}
                            <Card>
                                <CardContent className="p-8">
                                    <h3 className="mb-4 text-2xl font-bold text-primary">Installment Loans</h3>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <h4 className="mb-2 font-semibold">Loan Amount</h4>
                                            <p className="text-muted-foreground">$500 - $3,000</p>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold">Loan Term</h4>
                                            <p className="text-muted-foreground">3-12 months</p>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold">APR Range</h4>
                                            <p className="text-muted-foreground">180% - 365%*</p>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold">Monthly Payment</h4>
                                            <p className="text-muted-foreground">Fixed installments</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 rounded-lg bg-slate-50 p-4">
                                        <p className="text-sm text-muted-foreground">
                                            <strong>Example:</strong> For a $1,000 installment loan with a 6-month term at 200% APR, you
                                            would make 6 monthly payments of approximately $225, totaling $1,350 in repayment.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Line of Credit */}
                            <Card>
                                <CardContent className="p-8">
                                    <h3 className="mb-4 text-2xl font-bold text-primary">Line of Credit</h3>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <h4 className="mb-2 font-semibold">Credit Amount</h4>
                                            <p className="text-muted-foreground">Up to $4,500</p>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold">Draw Period</h4>
                                            <p className="text-muted-foreground">Ongoing/Revolving</p>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold">APR Range</h4>
                                            <p className="text-muted-foreground">150% - 400%*</p>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold">Minimum Payment</h4>
                                            <p className="text-muted-foreground">Based on outstanding balance</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 rounded-lg bg-slate-50 p-4">
                                        <p className="text-sm text-muted-foreground">
                                            <strong>Example:</strong> With a $2,000 line of credit at 200% APR, if you borrow $500, your
                                            monthly interest charge would be approximately $83. Pay interest only on what you use.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* State Availability */}
                <section className="bg-slate-50 py-16">
                    <div className="container mx-auto max-w-4xl px-4">
                        <h2 className="mb-8 text-3xl font-bold">State Availability</h2>
                        <p className="mb-6 text-muted-foreground">
                            CashNetService.com operates in most states across the U.S., but availability and loan types vary by state
                            regulations. To see what products are available in your state, please select your state during the
                            application process.
                        </p>
                        <Button className="bg-secondary hover:bg-secondary/90" asChild>
                            <Link href="/">Check Your State Eligibility</Link>
                        </Button>
                    </div>
                </section>

                {/* Disclaimers */}
                <section className="py-16">
                    <div className="container mx-auto max-w-4xl px-4">
                        <h2 className="mb-8 text-2xl font-bold">Important Disclaimers</h2>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <p>
                                *APR (Annual Percentage Rate) is the cost of credit as a yearly rate. APRs shown are illustrative and
                                may vary based on state laws and individual circumstances. Actual APR will be disclosed in your loan
                                agreement.
                            </p>
                            <p>
                                †Applications approved before 1:30 p.m. CT Monday-Friday are generally funded same business day,
                                subject to your bank's processing times. Applications approved at other times are generally funded the
                                next business day.
                            </p>
                            <p>
                                Loans should be used for short-term financial needs only, not as a long-term financial solution.
                                Customers with credit difficulties should seek credit counseling.
                            </p>
                            <p>
                                CashNetService.com is not a lender in all states. In Texas, we operate as a Credit Access Business (CAB) and
                                arrange loans with unaffiliated third-party lenders.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Apply?</h2>
                        <p className="mb-8 text-lg">Get your personalized rate in minutes</p>
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
