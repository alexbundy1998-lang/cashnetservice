"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

interface MobileNavProps {
  currentPath?: string
}

export function MobileNav({ currentPath }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px]">
        <SheetHeader>
          <SheetTitle className="text-left">
            <span className="text-xl font-bold">
              <span className="text-secondary">Cash</span>
              <span className="text-primary">NetServices</span>
            </span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-8">
          <Link
            href="/"
            className="px-4 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/what-we-offer"
            className="px-4 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
            onClick={() => setOpen(false)}
          >
            What We Offer
          </Link>
          <Link
            href="/rates-and-terms"
            className="px-4 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
            onClick={() => setOpen(false)}
          >
            Rates & Terms
          </Link>
          <Link
            href="/faqs"
            className="px-4 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
            onClick={() => setOpen(false)}
          >
            FAQs
          </Link>
          <Link
            href="/contact-us"
            className="px-4 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>
          <div className="mt-6 px-4">
            <Button
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90"
              asChild
            >
              <Link href="/bank-authentication" onClick={() => setOpen(false)}>
                Apply Now
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
