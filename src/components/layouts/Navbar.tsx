import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  isOpen?: boolean;
  handleHamburgerAction?: () => void;
  isFooter?: boolean;
}

const Index: FC<Props> = ({
  isOpen,
  handleHamburgerAction = () => {},
  isFooter = false,
}) => {
  if (isFooter) {
    return (
      <div className='navbar__container navbar__container--footer container'>
        <div className='col__2 col__network'>
          <a
            href='https://github.com/petergiromagny'
            rel='noopener noreferrer'
            className='network__github'
            target='_blank'
          >
            <Image
              src='/svg/social-network/github.svg'
              alt='Github Link'
              width={25}
              height={25}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/peter-giromagny-0b479a171/'
            rel='noopener noreferrer'
            className='network__linkedin'
            target='_blank'
          >
            <Image
              src='/svg/social-network/linkedin.svg'
              alt='Linkedin Link'
              width={25}
              height={25}
            />
          </a>
        </div>
        <div className='col__2 col__nav'>
          <div className='navbar__list'>
            <Link href='/#experience'>
              <a className='navbar__link'>About</a>
            </Link>
            <Link href='/#skill'>
              <a className='navbar__link'>Skills</a>
            </Link>
            <Link href='/#project'>
              <a className='navbar__link'>Projects</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='navbar__container container'>
      <div
        className={`navbar__hamburger ${
          isOpen ? "navbar__hamburger--opened" : "navbar__hamburger--closed"
        }`}
        onClick={() => handleHamburgerAction()}
        aria-hidden='true'
      >
        <span className='hamburger__line hamburger__line--top'></span>
        <span className='hamburger__line hamburger__line--middle'></span>
        <span className='hamburger__line hamburger__line--bottom'></span>
      </div>
      <div
        className={`navbar__status ${
          isOpen ? "navbar__status--opened" : "navbar__status--closed"
        }`}
      >
        <div className='col__2 col__network'>
          <a
            href='https://github.com/petergiromagny'
            rel='noopener noreferrer'
            className='network__github'
            target='_blank'
            onClick={() => handleHamburgerAction()}
          >
            <Image
              src='/svg/social-network/github.svg'
              alt='Github Link'
              width={25}
              height={25}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/peter-giromagny-0b479a171/'
            rel='noopener noreferrer'
            className='network__linkedin'
            target='_blank'
            onClick={() => handleHamburgerAction()}
          >
            <Image
              src='/svg/social-network/linkedin.svg'
              alt='Linkedin Link'
              width={25}
              height={25}
            />
          </a>
        </div>
        <div className='col__2 col__nav'>
          <div className='navbar__list'>
            <a
              href='#experience'
              className='navbar__link'
              onClick={() => handleHamburgerAction()}
            >
              About
            </a>
            <a
              href='#skill'
              className='navbar__link'
              onClick={() => handleHamburgerAction()}
            >
              Skills
            </a>
            <a
              href='#project'
              className='navbar__link'
              onClick={() => handleHamburgerAction()}
            >
              Projects
            </a>
            <a
              href='mailto:peter.giromagny@me.com'
              className='button'
              onClick={() => handleHamburgerAction()}
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
