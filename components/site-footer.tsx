import Link from "next/link"

export function SiteFooter() {
    return (
        <footer role="contentinfo" className="border-t bg-slate-800 py-8 text-white">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-4">
                    <Link href="/" className="text-2xl font-bold">
                        <span className="text-orange-400">CashNet</span>
                        <span className="text-teal-400">Service</span>
                    </Link>
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
                <div className="mb-4">
                    <p className="text-sm">
                        <Link href="tel:8883616963" className="hover:text-primary">
                            888.361.6963
                        </Link>
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                        200 West Jackson Blvd, Suite 1400, Chicago, IL 60606, United States
                    </p>
                </div>
                <p className="text-xs text-slate-400">© {new Date().getFullYear()} CashNetService.com. All rights reserved.</p>
            </div>
        </footer>
    )
}
