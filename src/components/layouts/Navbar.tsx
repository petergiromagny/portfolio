import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface Props {
  isOpen?: boolean
  handleHamburgerAction?: () => void
  isFooter?: boolean
}

const Index: FC<Props> = ({ isOpen, handleHamburgerAction = () => {}, isFooter = false }) => {
  if (isFooter) {
    return (
      <div className='navbar__container navbar__container--footer container'>
        <div className='col__2 col__network'>
          <Link
            href='https://github.com/petergiromagny'
            rel='noopener noreferrer'
            className='network__github'
            target='_blank'
          >
            <Image src='/svg/social-network/github.svg' alt='Github Link' width={25} height={25} />
          </Link>
          <Link
            href='https://www.linkedin.com/in/peter-giromagny-0b479a171/'
            rel='noopener noreferrer'
            className='network__linkedin'
            target='_blank'
          >
            <Image src='/svg/social-network/linkedin.svg' alt='Linkedin Link' width={25} height={25} />
          </Link>
        </div>
        <div className='col__2 col__nav'>
          <div className='navbar__list'>
            <Link href='/#experience' className='navbar__link'>
              About
            </Link>
            <Link href='/#skill' className='navbar__link'>
              Skills
            </Link>
            <Link href='/#project' className='navbar__link'>
              Projects
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='navbar__container container'>
      <div
        className={`navbar__hamburger ${isOpen ? "navbar__hamburger--opened" : "navbar__hamburger--closed"}`}
        onClick={() => handleHamburgerAction()}
        aria-hidden='true'
      >
        <span className='hamburger__line hamburger__line--top'></span>
        <span className='hamburger__line hamburger__line--middle'></span>
        <span className='hamburger__line hamburger__line--bottom'></span>
      </div>
      <div className={`navbar__status ${isOpen ? "navbar__status--opened" : "navbar__status--closed"}`}>
        <div className='col__2 col__network'>
          <Link
            href='https://github.com/petergiromagny'
            rel='noopener noreferrer'
            className='network__github'
            target='_blank'
            onClick={() => handleHamburgerAction()}
          >
            <Image src='/svg/social-network/github.svg' alt='Github Link' width={25} height={25} />
          </Link>
          <Link
            href='https://www.linkedin.com/in/peter-giromagny-0b479a171/'
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
            <Link href='#experience' className='navbar__link' onClick={() => handleHamburgerAction()}>
              About
            </Link>
            <Link href='#skill' className='navbar__link' onClick={() => handleHamburgerAction()}>
              Skills
            </Link>
            <Link href='#project' className='navbar__link' onClick={() => handleHamburgerAction()}>
              Projects
            </Link>
            <Link href='mailto:peter.giromagny@viacesi.fr' className='button' onClick={() => handleHamburgerAction()}>
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
