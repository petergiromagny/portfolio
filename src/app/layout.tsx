import { Open_Sans, Poppins } from "next/font/google"
import { ReactNode } from "react"

import { Footer, GATag, Navbar } from "@/components/layouts"
import { ScrollTopButton } from "@/components/shared"
import "@/styles/globals.scss"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata = {
  title: "Peter's Portfolio",
  description: "Let me introduce myself with my experiences, my skills and all the projects already accomplished",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={`${poppins.variable} ${openSans.variable}`}>
      <body>
        <div className='page__container'>
          <Navbar />

          {children}

          <Footer />

          <ScrollTopButton />
        </div>
      </body>

      <GATag />
    </html>
  )
}
