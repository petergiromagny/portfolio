import React, { FC } from "react";
import Image from "next/image";

const Launch: FC = () => {
  return (
    <div id='launch__content'>
      <div className='row__flex container'>
        <div className='col__2 launch__col--left'>
          <div className='section__header'>
            <span className='emoji'>🙋‍♂️</span>
            <h1>Hello, I&apos;m Peter</h1>
          </div>
          <div className='text__body'>
            <p>
              I&apos;m student in my last year computer engineering school and
              I&apos;m freelancer on my own time. This is my online
              presentation, to introduce my experiences, my top skills and some
              of my projects.
            </p>
            <p>
              During all my studies and some personnal projects I learned
              several programming languages. I&apos;m specializing in full stack
              development of web and mobile applications
            </p>
            <p>
              The development of applications is a passion for me, you&apos;re
              always learning some new things, some new ways to do, whether
              you&apos;re alone or in a team.
            </p>
          </div>
          <div className='text__footer'>
            <a
              href='https://drive.google.com/file/d/1g-off0bREbx5bPchIa1CoYrEyw0pr6CR/view?usp=sharing'
              rel='noopener noreferrer'
              target='_blank'
              className='button'
            >
              Download CV
            </a>
          </div>
        </div>
        <div className='col__2 launch__col--right'>
          <span className='circle__opacity circle__opacity--high'></span>
          <span className='circle__opacity circle__opacity--mid'></span>
          <span className='circle__opacity circle__opacity--low'></span>
          <div className='avatar__shape avatar__shape--triangle'></div>
          <div className='desktop__content'>
            <Image
              src='/svg/avatar.svg'
              alt="Peter's avatar"
              width={175}
              height={175}
              priority
            />
            <div className='avatar__shape avatar__shape--triangle'>
              <Image
                src='/svg/triangle.svg'
                alt='triangle shape'
                width={175}
                height={175}
                priority
              />
            </div>
            <div className='avatar__shape avatar__shape--half-donut'>
              <Image
                src='/svg/half-donut.svg'
                alt='half donut shape'
                width={140}
                height={140}
                priority
              />
            </div>
            <div className='avatar__shape avatar__shape--donut'>
              <Image
                src='/svg/donut.svg'
                alt='donut shape'
                width={120}
                height={120}
                priority
              />
            </div>
            <div className='avatar__shape avatar__shape--plus'>
              <Image
                src='/svg/plus.svg'
                alt='plus shape'
                width={175}
                height={175}
                priority
              />
            </div>
          </div>
          <div className='mobile__content'>
            <Image
              src='/svg/avatar.svg'
              alt="Peter's avatar"
              width={125}
              height={125}
              priority
            />
            <div className='avatar__shape avatar__shape--triangle'>
              <Image
                src='/svg/triangle.svg'
                alt='triangle shape'
                width={175}
                height={175}
                priority
              />
            </div>
            <div className='avatar__shape avatar__shape--half-donut'>
              <Image
                src='/svg/half-donut.svg'
                alt='half donut shape'
                width={140}
                height={140}
                priority
              />
            </div>
            <div className='avatar__shape avatar__shape--donut'>
              <Image
                src='/svg/donut.svg'
                alt='donut shape'
                width={120}
                height={120}
                priority
              />
            </div>
            <div className='avatar__shape avatar__shape--plus'>
              <Image
                src='/svg/plus.svg'
                alt='plus shape'
                width={175}
                height={175}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launch;
