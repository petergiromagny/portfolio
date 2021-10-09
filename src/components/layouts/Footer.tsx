import React, { FC } from "react";
// Import components
import Navbar from "./Navbar";

const Index: FC = () => {
  return (
    <footer id='footer__content'>
      <div className='container'>
        <div className='section__header'>
          <span className='emoji'>✉️</span>
          <h2>Let&apos;s Work Together</h2>
        </div>
        <div className='footer__body'>
          <p>
            If you have a website or mobile app idea in mind, feel free to
            contact me.
          </p>
          <a href='mailto:peter.giromagny@me.com' className='button'>
            Say Hello!
          </a>
          <Navbar isFooter />
        </div>
      </div>
    </footer>
  );
};

export default Index;
