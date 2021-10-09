import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
// Import layouts
import Body from "components/layouts/Body";
import Navbar from "components/layouts/Navbar";
import Footer from "components/layouts/Footer";
// Import sections
import Launch from "components/sections/Launch";
import Experience from "components/sections/Experience";
import Skill from "components/sections/Skill";
import Project from "components/sections/Project";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className='home__content'>
      <Body>
        <Navbar />
        <Launch setIsLoading={setIsLoading} />
        <Experience />
        <Skill />
        <Project />
      </Body>
    </div>
  );
};

export default Home;
