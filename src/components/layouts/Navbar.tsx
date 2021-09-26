import React from 'react';
// Import components
import Button from 'components/elements/Button';

const Index = () => {
  return (
    <div className='navbar__container container'>
      <div className='navbar__list'>
        <a href='#' className='navbar__link'>
          About
        </a>
        <a href='#' className='navbar__link'>
          Skills
        </a>
        <a href='#' className='navbar__link'>
          Projects
        </a>
        <Button text='Contact me' />
      </div>
    </div>
  );
};

export default Index;
