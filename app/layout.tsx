import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CashNetService.com - Loan Application | Fast, Secure Online Loans",
  description: "Apply for fast online loans with CashNetService.com. Same-day deposit available, instant decision, and secure bank-level encryption. Get emergency funding when you need it most.",
  generator: "v0.app",
  keywords: ["online loans", "fast cash", "payday loans", "installment loans", "line of credit", "same day deposit", "instant decision", "cashnetservice"],
  authors: [{ name: "CashNetService.com" }],
  openGraph: {
    title: "CashNetService.com - Loan Application",
    description: "Apply for fast online loans with CashNetService.com. Same-day deposit available with instant decision.",
    type: "website",
    locale: "en_US",
    url: "https://cashnetservice.com",
    siteName: "CashNetService.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "CashNetService.com - Loan Application",
    description: "Apply for fast online loans. Same-day deposit available with instant decision.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
