import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <nav className="hidden items-center gap-6 md:flex">
                    <Link href="tel:8883616963" className="text-sm font-medium hover:text-primary">
                        888.361.6963
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
                    <Link href="/bank-authentication" className="text-sm font-medium hover:text-primary">
                        Log In
                    </Link>
                    <Button size="sm" className="bg-secondary hover:bg-secondary/90" asChild>
                        <Link href="/bank-authentication">Apply Now</Link>
                    </Button>
                </nav>
            </div>
        </header>
    )
}
