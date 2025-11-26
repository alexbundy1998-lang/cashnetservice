import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Facebook, Instagram, Youtube } from "lucide-react"
import { SkipLink } from "@/components/skip-link"
import { SiteHeader } from "@/components/site-header"

export default function QualificationPage() {
  return (
    <div className="min-h-screen bg-background">
      <SkipLink />
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
      {/* Hero Section - Be the Hero */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Left - Hero Image */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 blur-3xl" aria-hidden="true" />
                <Image
                  src="/images/hero-person.png"
                  alt="Confident business person in empowering pose representing financial success and taking control of your finances"
                  width={400}
                  height={500}
                  priority
                  className="relative z-10 h-auto w-full max-w-md"
                />
              </div>
            </div>

            {/* Right - Hero Content */}
            <div className="space-y-6 text-center md:text-left">
              <h1 id="hero-heading" className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                When You Need Money Fast, Be the Hero
              </h1>
              <div className="space-y-4 text-lg md:text-xl">
                <label htmlFor="state-selector" className="block">
                  What state do you live in?
                </label>
                <select
                  id="state-selector"
                  name="state"
                  aria-required="true"
                  className="w-full max-w-md rounded-lg border-2 border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-sm focus:border-white focus:outline-none"
                >
                  <option value="" style={{ display: "none" }}>
                    Select your state
                  </option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                <div className="space-y-2">
                  <p className="text-base">
                    Sorry, we don't currently offer loans in Virginia. You may be eligible for an offer through our
                    partner brand, NetCredit.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <svg className="h-8 w-auto" viewBox="0 0 120 30" fill="white">
                      <text x="0" y="20" fontSize="16" fontWeight="bold">
                        NetCredit
                      </text>
                    </svg>
                  </div>
                </div>
                <Button size="lg" className="bg-secondary px-8 py-6 text-lg font-semibold hover:bg-secondary/90" asChild>
                  <Link href="/bank-authentication">Check Your Eligibility</Link>
                </Button>
                <p className="text-sm">
                  By clicking "Check Your Eligibility," you will be redirected to NetCredit.com.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 100" className="h-16 w-full fill-white">
            <path d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content">
        {/* Existing Customer Section */}
        <section aria-labelledby="existing-customer-heading" className="bg-slate-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 id="existing-customer-heading" className="mb-6 text-2xl font-bold">Existing Customer?</h2>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              asChild
            >
              <Link href="/bank-authentication">Log In</Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section aria-labelledby="features-heading" className="py-16">
          <div className="container mx-auto px-4">
            <h2 id="features-heading" className="sr-only">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-lg bg-primary/10 p-6">
                    <svg className="h-16 w-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">Same-Day Deposit Available</h3>
                <p className="text-muted-foreground">
                  If approved before 1:30 p.m. CT Monday – Friday<sup>†</sup>
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-lg bg-primary/10 p-6">
                    <svg className="h-16 w-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Instant Decision<sup>*</sup>
                </h3>
                <p className="text-muted-foreground">Receive an immediate decision</p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-lg bg-primary/10 p-6">
                    <svg className="h-16 w-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">Quick Application</h3>
                <p className="text-muted-foreground">
                  <Link href="/bank-authentication" className="text-primary hover:underline">
                    Apply
                  </Link>{" "}
                  online in minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Congratulations Section */}
        <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl md:p-12">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

                <div className="relative z-10 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-primary/10 p-4">
                      <CheckCircle2 className="h-16 w-16 text-primary" />
                    </div>
                  </div>

                  <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Congratulations!</h2>
                  <p className="mb-8 text-xl text-muted-foreground md:text-2xl">{"You've qualified for a loan."}</p>

                  <div className="mb-8 flex justify-center">
                    <div className="relative h-64 w-64 overflow-hidden rounded-3xl border-4 border-primary/20 shadow-2xl">
                      <Image
                        src="/images/mobile-app.png"
                        alt="Mobile phone displaying loan approval notification and application interface"
                        width={256}
                        height={256}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="mb-8 rounded-xl bg-primary/5 p-6">
                    <h3 className="mb-2 text-lg font-semibold text-primary">Start Repayment Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Please review your loan details and complete the following step
                    </p>
                  </div>

                  <Link href="/bank-authentication">
                    <Button
                      size="lg"
                      className="w-full bg-secondary px-12 py-6 text-lg font-semibold hover:bg-secondary/90 md:w-auto"
                    >
                      Apply Now
                    </Button>
                  </Link>

                  <p className="mt-6 text-xs text-muted-foreground">
                    By clicking Apply Now, you will be directed to our secure bank authentication page
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Access to Savings Section */}
        <section aria-labelledby="savings-heading" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-8 md:grid-cols-2">
              {/* Left - Image */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 blur-3xl" aria-hidden="true" />
                <Image
                  src="/images/financial-security.png"
                  alt="Financial security and trust - professional consultation representing reliable financial services"
                  width={600}
                  height={400}
                  className="relative z-10 h-auto w-full"
                />
              </div>

              {/* Right - Content */}
              <div className="space-y-6">
                <h2 id="savings-heading" className="text-balance text-3xl font-bold md:text-4xl">
                  Get free access to savings as a CashNetService.com customer.
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {"We're here to help you in the here and "}
                    <span className="font-semibold italic">now</span>
                    {". But what about the now and "}
                    <span className="font-semibold italic">then</span>?
                  </p>
                  <p>
                    The second you create a CashNetService.com account, you get special access to discount coupons, financial
                    education courses and a financial assistance tool. These free benefits can help you save on bills,
                    build your budgeting skills and get employment assistance, among much, much more.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section aria-labelledby="testimonial-heading" className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl bg-white p-8 shadow-lg md:p-12">
                <div className="mb-8 flex items-center justify-center gap-1 text-4xl text-primary">
                  <span>"</span>
                </div>
                <blockquote className="mb-6 text-center text-lg text-muted-foreground md:text-xl">
                  They really help their customers out... you can definitely rely on this company to come through for
                  you...
                </blockquote>
                <p className="mb-8 text-center font-semibold">— Candice, Louisiana</p>
                <div className="text-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    See More Stories
                  </Button>
                </div>
                <p className="mt-6 text-center text-xs text-muted-foreground">
                  Customer was compensated for sharing their story.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {/* Trustpilot */}
                <div className="text-center">
                  <div className="mb-2 flex justify-center">
                    <svg className="h-8 w-auto" viewBox="0 0 120 30" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <p className="font-semibold">TrustScore 4.6</p>
                  <p className="text-sm text-muted-foreground">39,302 reviews</p>
                </div>

                {/* Consumer Affairs */}
                <div className="text-center">
                  <div className="mb-2 flex justify-center">
                    <svg className="h-8 w-auto text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <p className="font-semibold">4.8</p>
                  <p className="text-sm text-muted-foreground">Read our 4,588 reviews</p>
                </div>

                {/* LendingTree */}
                <div className="text-center">
                  <div className="mb-2 flex justify-center">
                    <div className="rounded-lg border-2 border-primary px-4 py-2">
                      <p className="text-lg font-bold text-primary">TOP3</p>
                    </div>
                  </div>
                  <p className="font-semibold">CUSTOMER SATISFACTION</p>
                  <p className="text-sm text-muted-foreground">PERSONAL LOAN Q2 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Save the Day Section */}
        <section aria-labelledby="credit-heading" className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-8 md:grid-cols-2">
              {/* Left - Phone Image */}
              <div className="relative flex justify-center">
                <div className="relative h-96 w-64 overflow-hidden rounded-3xl border-8 border-white/20 shadow-2xl">
                  <Image
                    src="/images/mobile-app.png"
                    alt="Smartphone showing loan approved screen with financial application interface"
                    width={256}
                    height={384}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-6">
                <h2 id="credit-heading" className="text-balance text-3xl font-bold md:text-4xl">
                  {"There's another way to save the day — with CashNetService.com."}
                </h2>
                <div className="space-y-4">
                  <p>
                    Whether or not you have a perfect credit score, you deserve equal access to{" "}
                    <span className="font-semibold">credit</span>.{" "}
                    {
                      "That's why we do our best to consider your overall finances — not just the number on your credit report. Our alternative credit check makes it possible for those with less-than-perfect credit to be approved."
                    }
                    <sup>^</sup> So you can be the hero of your finances.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Wave decoration */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1200 100" className="h-16 w-full fill-white">
              <path d="M0,50 Q300,100 600,50 T1200,50 L1200,100 L0,100 Z" />
            </svg>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 id="security-heading" className="mb-8 text-3xl font-bold">We keep your personal data safe and secure.</h2>
              <p className="mb-12 text-lg text-muted-foreground">
                We ask for some personal information when you apply with us, because we need to make sure that{" "}
                {"you're you!"} But we also understand you may have concerns about the security and sharing of your data.
              </p>

              <div className="mb-12 grid gap-8 md:grid-cols-2">
                {/* What you can do */}
                <div className="rounded-2xl bg-slate-50 p-8 text-left">
                  <div className="mb-4 inline-block rounded-lg bg-pink-100 px-4 py-2">
                    <h3 className="font-bold text-pink-600">What you can do:</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Visit our{" "}
                    <Link href="#" className="font-semibold text-primary hover:underline">
                      Online Security Center
                    </Link>{" "}
                    for tips on how to protect your personal information and scams you should know about.
                  </p>
                </div>

                {/* What we do */}
                <div className="rounded-2xl bg-slate-50 p-8 text-left">
                  <div className="mb-4 inline-block rounded-lg bg-pink-100 px-4 py-2">
                    <h3 className="font-bold text-pink-600">What we do:</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We continuously monitor and protect our network with TrustedSite<sup>®</sup>.
                  </p>
                </div>
              </div>

              {/* Security Icon */}
              <div className="mb-8 flex justify-center">
                <div className="rounded-2xl bg-pink-100 p-8">
                  <svg className="h-24 w-24 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-muted-foreground">
                CashNetService.com uses high-grade security software to ensure the safety and privacy of your sensitive
                information. We also encourage you to download our easy-to-read{" "}
                <Link href="#" className="font-semibold text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                for more information.
              </p>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section aria-labelledby="company-info-heading" className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-6 text-center text-sm text-muted-foreground">
              <h2 id="company-info-heading" className="sr-only">Company Information</h2>
              <p>{"We've been offering fast funding for emergencies since 2004."}</p>
              <p>
                When you need emergency funding, you want an{" "}
                <Link href="#" className="font-semibold text-primary hover:underline">
                  online lender
                </Link>{" "}
                with a proven track record. CashNetService.com is part of the publicly traded company, Enova International, Inc. (
                <Link href="#" className="font-semibold text-primary hover:underline">
                  NYSE:ENVA
                </Link>
                ), and has helped more than 4 million hardworking people rescue their finances for 16+ years.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer role="contentinfo" className="border-t bg-slate-800 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 text-center">
            <span className="text-3xl font-bold">
              <span className="text-orange-400">CashNet</span>
              <span className="text-teal-400">Service</span>
            </span>
          </div>

          {/* Phone Number */}
          <div className="mb-8 text-center">
            <p className="text-2xl font-semibold">888.361.6963</p>
          </div>

          {/* Social Icons */}
          <div className="mb-8 flex justify-center gap-6">
            <Link href="#" className="rounded-full bg-white/10 p-3 hover:bg-white/20">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="rounded-full bg-white/10 p-3 hover:bg-white/20">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="rounded-full bg-white/10 p-3 hover:bg-white/20">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link href="#" className="rounded-full bg-white/10 p-3 hover:bg-white/20">
              <Youtube className="h-6 w-6" />
            </Link>
          </div>

          {/* Footer Links */}
          <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="#" className="hover:text-primary">
              Home
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              What We Offer
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Rates & Terms
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Contact Us
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              FAQs
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              About Us
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Blog
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              California Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Terms of Use
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Service Of Process
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Opt Out
            </Link>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="#" className="hover:text-primary">
              Payday Loan Alternatives
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Cash Advance
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Online Loans
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Installment Loans
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Line of Credit
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Fast Cash
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Online Security
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Cookie Preferences
            </Link>
          </div>

          {/* TrustedSite Badge */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-lg bg-white px-6 py-3">
              <p className="font-semibold text-green-600">TrustedSite Certified</p>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="space-y-4 text-xs text-slate-400">
            <p>
              *CashNetService.com is not a lender in all states. CashNetService.com and third-party lenders use various credit reports,
              data sources and application information as part of their underwriting. Not all applications are approved.
              Approval and loan terms vary based on applicant qualifications and by state. Decision may take longer if
              additional verification or documents are required.
            </p>
            <p>
              †Applications approved before 1:30 p.m. CT Monday-Friday are generally funded same business day, subject
              to{" "}
              {
                "your bank's processing times. Applications approved other times are generally funded the next business day. Some applications may require additional verification. In such cases, if approved, funds will be disbursed by the following business day after the additional verifications are complete."
              }
            </p>
            <p>
              TX residents: CashNetService.com operates as a Credit Access Business (CAB) to arrange a loan between you and an
              unaffiliated third-party lender.
            </p>
            <p>KS residents: CashNetService.com, License No. SL.0000293</p>
            <p>© {new Date().getFullYear()} CNU Online Holdings, LLC. All Rights Reserved.</p>
          </div>

          {/* Address */}
          <div className="mt-8 text-center text-sm text-slate-400">
            <p>200 West Jackson, Suite 1400, Chicago, IL 60606, United States</p>
            <p className="mt-2">Toll Free: 888.361.6963</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
