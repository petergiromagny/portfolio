import React, { FC } from "react";
import Image from "next/image";

const Skill: FC = () => {
  return (
    <div id='skill'>
      <div className='container'>
        <div className='section__header'>
          <span className='emoji'>💎</span>
          <h2>Top Skills</h2>
        </div>
        <div className='skill__body'>
          <div className='skill__col'>
            <Image
              src='/svg/skills/react.svg'
              alt='React and React Native'
              width={75}
              height={75}
              priority
            />
            <Image
              src='/svg/skills/vuejs.svg'
              alt='VueJS'
              width={75}
              height={75}
              priority
            />
            <Image
              src='/svg/skills/sass.svg'
              alt='Sass'
              width={75}
              height={75}
              priority
            />
            <Image
              src='/svg/skills/prettier.svg'
              alt='Prettier'
              width={75}
              height={75}
              priority
            />
            <Image
              src='/svg/skills/eslint.svg'
              alt='ESlint'
              width={150}
              height={75}
              priority
            />
          </div>
          <div className='skill__col'>
            <Image
              src='/svg/skills/nodejs.svg'
              alt='NodeJS'
              width={75}
              height={75}
              priority
            />
            <Image
              src='/svg/skills/expressjs.svg'
              alt='ExpressJS'
              width={150}
              height={75}
              priority
            />
            <Image
              src='/svg/skills/nextjs.svg'
              alt='NextJS'
              width={75}
              height={75}
              priority
            />
            <Image
              src='/svg/skills/redux.svg'
              alt='Redux'
              width={75}
              height={75}
              priority
            />
            <Image
              src='/svg/skills/typescript.svg'
              alt='Typescript'
              width={75}
              height={75}
              priority
            />
            <Image
              src='/svg/skills/python.svg'
              alt='Python'
              width={75}
              height={75}
              priority
            />
            <Image
              src='/svg/skills/git.svg'
              alt='Git'
              width={75}
              height={75}
              priority
            />
          </div>
          <div className='skill__col'>
            <Image
              src='/svg/skills/mongodb.svg'
              alt='MongoDB'
              width={150}
              height={75}
              priority
            />
            <Image
              src='/svg/skills/sqlserver.svg'
              alt='SQL Server'
              width={150}
              height={75}
              priority
            />
            <Image
              src='/svg/skills/mysql.svg'
              alt='MySQL'
              width={75}
              height={75}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
