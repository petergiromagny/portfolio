"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"

import { LINKS } from "@/constants/links.constant"
import { ROUTES } from "@/constants/routes.constant"

export function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false)

  const handleHamburgerAction = useCallback(() => {
    setHamburgerOpen(!hamburgerOpen)
  }, [hamburgerOpen, setHamburgerOpen])

  return (
    <div className='navbar__container container'>
      <div
        className={`navbar__hamburger ${hamburgerOpen ? "navbar__hamburger--opened" : "navbar__hamburger--closed"}`}
        onClick={() => handleHamburgerAction()}
        aria-hidden='true'
      >
        <span className='hamburger__line hamburger__line--top'></span>
        <span className='hamburger__line hamburger__line--middle'></span>
        <span className='hamburger__line hamburger__line--bottom'></span>
      </div>

      <div className={`navbar__status ${hamburgerOpen ? "navbar__status--opened" : "navbar__status--closed"}`}>
        <div className='col__2 col__network'>
          <Link
            href={LINKS.GITHUB}
            rel='noopener noreferrer'
            className='network__github'
            target='_blank'
            onClick={() => handleHamburgerAction()}
          >
            <Image src='/svg/social-network/github.svg' alt='Github Link' width={25} height={25} />
          </Link>

          <Link
            href={LINKS.LINKEDIN}
            rel='noopener noreferrer'
            className='network__linkedin'
            target='_blank'
            onClick={() => handleHamburgerAction()}
          >
            <Image src='/svg/social-network/linkedin.svg' alt='Linkedin Link' width={25} height={25} />
          </Link>
        </div>

        <div className='col__2 col__nav'>
          <div className='navbar__list'>
            <Link href={ROUTES.EXPERIENCE} className='navbar__link' onClick={() => handleHamburgerAction()}>
              About
            </Link>

            <Link href={ROUTES.SKILLS} className='navbar__link' onClick={() => handleHamburgerAction()}>
              Skills
            </Link>

            <Link href={ROUTES.PROJECT} className='navbar__link' onClick={() => handleHamburgerAction()}>
              Projects
            </Link>

            <Link href={LINKS.MAIL} className='button' onClick={() => handleHamburgerAction()}>
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
