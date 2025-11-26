"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { SkipLink } from "@/components/skip-link"
import { useToast } from "@/hooks/use-toast"

export default function ContactUsPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formElement = e.currentTarget
        const formData = new FormData(formElement)
        const data = Object.fromEntries(formData.entries())

        try {
            const response = await fetch('/api/google-form-proxy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                toast({
                    title: "Success!",
                    description: "Your message has been sent. We'll respond within 1-2 business days.",
                })
                formElement.reset()
            } else {
                throw new Error('Failed to submit form')
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again or contact us directly.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

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
                </div>
            </header>

            {/* Main Content */}
            <main id="main-content">
                {/* Hero Section */}
                <section aria-labelledby="page-heading" className="bg-liner-to-br from-blue-500 to-blue-600 py-16 text-white">
                    <div className="container mx-auto px-4">
                        <h1 id="page-heading" className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
                        <p className="text-lg md:text-xl">We're here to help answer your questions</p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-8 lg:grid-cols-3">
                            {/* Contact Information */}
                            <div className="space-y-6 lg:col-span-1">
                                <h2 className="text-2xl font-bold">Get In Touch</h2>

                                <Card>
                                    <CardContent className="p-6">
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-4">
                                                <div className="rounded-lg bg-primary/10 p-3">
                                                    <Phone className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">Phone</h3>
                                                    <p className="text-sm text-muted-foreground">888.361.6963</p>
                                                    <p className="text-xs text-muted-foreground">Toll Free: 888.361.6963</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="rounded-lg bg-primary/10 p-3">
                                                    <Mail className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">Email</h3>
                                                    <p className="text-sm text-muted-foreground">support@CashNetServices.com</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="rounded-lg bg-primary/10 p-3">
                                                    <MapPin className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">Address</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        200 West Jackson, Suite 1400<br />
                                                        Chicago, IL 60606<br />
                                                        United States
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="rounded-lg bg-primary/10 p-3">
                                                    <Clock className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">Business Hours</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        Monday - Friday: 6am - 8pm CT<br />
                                                        Saturday: 7am - 6pm CT<br />
                                                        Sunday: Closed
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-2">
                                <Card>
                                    <CardContent className="p-8">
                                        <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid gap-6 sm:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName">
                                                        First Name <span className="text-destructive">*</span>
                                                    </Label>
                                                    <Input id="firstName" name="firstName" required placeholder="John" />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName">
                                                        Last Name <span className="text-destructive">*</span>
                                                    </Label>
                                                    <Input id="lastName" name="lastName" required placeholder="Doe" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email">
                                                    Email <span className="text-destructive">*</span>
                                                </Label>
                                                <Input id="email" name="email" type="email" required placeholder="john.doe@example.com" />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="phone">
                                                    Phone Number
                                                </Label>
                                                <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="subject">
                                                    Subject <span className="text-destructive">*</span>
                                                </Label>
                                                <Input id="subject" name="subject" required placeholder="How can we help?" />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">
                                                    Message <span className="text-destructive">*</span>
                                                </Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    placeholder="Please describe your question or concern..."
                                                    rows={6}
                                                />
                                            </div>

                                            <Button 
                                                type="submit" 
                                                size="lg" 
                                                className="w-full bg-secondary hover:bg-secondary/90"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? "Sending..." : "Send Message"}
                                            </Button>

                                            <p className="text-center text-xs text-muted-foreground">
                                                We'll respond to your message within 1-2 business days
                                            </p>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>
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
