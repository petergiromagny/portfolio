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
              I&apos;m a freelance Fullstack TypeScript engineer specializing in web and mobile application development. With 4 years of experience, I focus on building scalable, high-performance applications using modern technologies like React, Next.js, and NestJS.
            </p>
            <p>
              Throughout my career, I have worked on diverse projects, from SaaS platforms to fintech applications, always applying best practices in software architecture, security, and optimization. Passionate about continuous learning, I stay up-to-date with the latest advancements to deliver innovative and efficient solutions.
            </p>
            <p>
              This website showcases my experience, key skills, and selected projects. Feel free to explore and reach out for potential collaborations.
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
