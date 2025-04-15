import Link from "next/link"

import { LINKS } from "@/constants/links.constant"

import { FooterNavbar } from "./FooterNavbar"

export function Footer() {
  return (
    <footer id='footer__content'>
      <div className='container'>
        <div className='section__header'>
          <span className='emoji'>✉️</span>
          <h2>Let&apos;s Work Together</h2>
        </div>
        <div className='footer__body'>
          <p>If you have a website or mobile app idea in mind, feel free to contact me.</p>

          <Link href={LINKS.MAIL} className='button'>
            Say Hello!
          </Link>

          <FooterNavbar />
        </div>
      </div>
    </footer>
  )
}
