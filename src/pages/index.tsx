import React, { useEffect } from "react";
import type { NextPage } from "next";
// Import layouts
import Header from "components/layouts/Header";
import Body from "components/layouts/Body";
import Navbar from "components/layouts/Navbar";
// Import sections
import Launch from "components/sections/Launch";
import Experience from "components/sections/Experience";
import Skills from "components/sections/Skills";

const Home: NextPage = () => {
  return (
    <div className='page__container'>
      <Header />
      <Body>
        <Navbar />
        <Launch />
        <Experience />
        <Skills />
      </Body>
    </div>
  );
};

export default Home;
