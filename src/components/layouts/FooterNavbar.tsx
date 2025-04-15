import Image from "next/image"
import Link from "next/link"

import { LINKS } from "@/constants/links.constant"
import { ROUTES } from "@/constants/routes.constant"

export function FooterNavbar() {
  return (
    <div className='navbar__container navbar__container--footer container'>
      <div className='col__2 col__network'>
        <Link href={LINKS.GITHUB} rel='noopener noreferrer' className='network__github' target='_blank'>
          <Image src='/svg/social-network/github.svg' alt='Github Link' width={25} height={25} />
        </Link>

        <Link href={LINKS.LINKEDIN} rel='noopener noreferrer' className='network__linkedin' target='_blank'>
          <Image src='/svg/social-network/linkedin.svg' alt='Linkedin Link' width={25} height={25} />
        </Link>
      </div>

      <div className='col__2 col__nav'>
        <div className='navbar__list'>
          <Link href={ROUTES.EXPERIENCE} className='navbar__link'>
            About
          </Link>

          <Link href={ROUTES.SKILLS} className='navbar__link'>
            Skills
          </Link>

          <Link href={ROUTES.PROJECT} className='navbar__link'>
            Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
