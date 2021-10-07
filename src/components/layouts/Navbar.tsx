import React, { FC } from "react";
// Import components
import Button from "components/elements/Button";

interface Props {
  isFooter?: boolean;
}

const Index: FC<Props> = ({ isFooter = false }) => {
  if (isFooter) {
    return (
      <div className='navbar__container navbar__container--footer container'>
        <div className='navbar__list'>
          <a href='#experience' className='navbar__link'>
            About
          </a>
          <a href='#skill' className='navbar__link'>
            Skills
          </a>
          <a href='#project' className='navbar__link'>
            Projects
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className='navbar__container container'>
      <div className='navbar__list'>
        <a href='#experience' className='navbar__link'>
          About
        </a>
        <a href='#skill' className='navbar__link'>
          Skills
        </a>
        <a href='#project' className='navbar__link'>
          Projects
        </a>
        <Button text='Contact me' />
      </div>
    </div>
  );
};

export default Index;
