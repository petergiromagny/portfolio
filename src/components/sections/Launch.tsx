import React from "react";
import Image from "next/image";
// Import components
import Button from "components/elements/Button";

const Index = () => {
  return (
    <div id='launch__content'>
      <div className='row__flex container'>
        <div className='col__2 launch__col--left'>
          <div className='text__header'>
            <span className='emoji'>🙋‍♂️</span>
            <h1>Hello, I&apos;m Peter</h1>
          </div>
          <div className='text__body'>
            <p>
              Hello, I&apos;m Peter, student in my 3rd year of IT engineering
              and this is my online presentation, made with HTML, CSS(Sass) and
              some JS.
            </p>
            <p>
              During my two last years, I learned several programming languages,
              and they were all very interesting, but some specific ones really
              stood out to me.
            </p>
            <p>
              Web development is a passion to me, you&apos;re always learning
              some new things, some new ways to do, whether you&apos;re alone or
              in a team, because the development of a website isn’t just one
              person, it is all team.
            </p>
          </div>
          <div className='text__footer'>
            <Button text='Download CV' />
          </div>
        </div>
        <div className='col__2 launch__col--right'>
          <span className='circle__opacity circle__opacity--high'></span>
          <span className='circle__opacity circle__opacity--mid'></span>
          <span className='circle__opacity circle__opacity--low'></span>
          <Image
            src='/svg/avatar.svg'
            alt="Peter's avatar"
            width={200}
            height={200}
          />
          <div className='avatar__shape avatar__shape--triangle'>
            <Image
              src='/svg/triangle.svg'
              alt='triangle shape'
              width={200}
              height={200}
            />
          </div>
          <div className='avatar__shape avatar__shape--half-donut'>
            <Image
              src='/svg/half-donut.svg'
              alt='half donut shape'
              width={150}
              height={150}
            />
          </div>
          <div className='avatar__shape avatar__shape--donut'>
            <Image
              src='/svg/donut.svg'
              alt='donut shape'
              width={135}
              height={135}
            />
          </div>
          <div className='avatar__shape avatar__shape--plus'>
            <Image
              src='/svg/plus.svg'
              alt='plus shape'
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
