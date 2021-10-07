import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
// Import layouts
import Header from "components/layouts/Header";
import Body from "components/layouts/Body";
import Navbar from "components/layouts/Navbar";
import Footer from "components/layouts/Footer";
// Import sections
import Launch from "components/sections/Launch";
import Experience from "components/sections/Experience";
import Skill from "components/sections/Skill";
import Project from "components/sections/Project";

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <div className='page__container'>
      <Header />
      <Body>
        <Navbar />
        <Launch />
        <Experience />
        <Skill />
        <Project />
      </Body>
      <Footer />
      <div
        className={`scroll__content ${
          isVisible ? "scroll__content--on" : "scroll__content--off"
        }`}
        onClick={scrollToTop}
      >
        <Image
          src='/svg/arrowScroll.svg'
          alt='Go to top'
          width={60}
          height={60}
        />
      </div>
    </div>
  );
};

export default Home;
